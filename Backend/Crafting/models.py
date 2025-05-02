from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='icons', null=True, blank=True)

    def __str__(self):
        return self.name


class Machine(models.Model):
    name = models.CharField(max_length=100)
    mod = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=100, default="")

    outputs = models.ManyToManyField(Item, related_name='recipe_outputs', through="RecipeItemLinkOutput")
    inputs = models.ManyToManyField(Item, related_name='recipe_inputs', through="RecipeItemLinkInput")

    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)

    crafting_time = models.IntegerField(default=0)
    process_energy = models.IntegerField(default=0)

    def __str__(self):
        return self.name


    def save(self, *args, **kwargs):
        if self.name == "":
            self.name = self.machine.name + " - " + self.outputs[0].name
        super().save()


class RecipeItemLinkInput(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='item_inputs', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    amount = models.IntegerField(default=0)
    used = models.BooleanField(default=True)


class RecipeItemLinkOutput(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='item_outputs', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    amount = models.IntegerField(default=0)
