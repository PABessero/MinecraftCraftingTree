from rest_framework import routers, serializers, viewsets

from Crafting.models import Item, Recipe, RecipeItemLinkInput, RecipeItemLinkOutput, Machine


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'icon', 'recipe_inputs']


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class MachineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Machine
        fields = ['name', 'mod']


class RecipeInputSerializer(serializers.ModelSerializer):
    item = ItemSerializer()
    class Meta:
        model = RecipeItemLinkInput
        fields = ['item', 'amount', 'used']
        # fields = '__all__'


class RecipeOutputSerializer(serializers.ModelSerializer):
    item = ItemSerializer()
    class Meta:
        model = RecipeItemLinkOutput
        fields = ('item', 'amount')


class RecipeSerializer(serializers.ModelSerializer):
    depth = 0
    machine = MachineSerializer()
    item_inputs = RecipeInputSerializer(many=True)
    item_outputs = RecipeOutputSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'machine', 'item_inputs', 'item_outputs', 'crafting_time', 'process_energy']
        # fields = '__all__'


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
