from django.contrib import admin

from Crafting.models import Recipe, Item, Machine, RecipeItemLinkInput, RecipeItemLinkOutput


# Register your models here.

class ItemAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


class RecipeItemLinkInputAdmin(admin.TabularInline):
    model = RecipeItemLinkInput
    extra = 1


class RecipeItemLinkOutputAdmin(admin.TabularInline):
    model = RecipeItemLinkOutput
    extra = 1


class RecipeAdmin(admin.ModelAdmin):
    inlines = [RecipeItemLinkInputAdmin, RecipeItemLinkOutputAdmin]
    list_display = ('name',)
    search_fields = ('name',)


class MachineAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(Item, ItemAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(Machine, MachineAdmin)