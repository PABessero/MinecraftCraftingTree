from rest_framework import routers, serializers, viewsets

from Crafting.models import Item, Recipe, RecipeItemLinkInput, RecipeItemLinkOutput, Machine


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'icon']


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class MachineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Machine
        fields = ('name', 'mod')


class RecipeInputSerializer(serializers.ModelSerializer):
    # recipe_item = ItemSerializer(many=True, read_only=True)
    class Meta:
        model = RecipeItemLinkInput
        fields = ('id', 'amount')
        # fields = '__all__'


class RecipeOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeItemLinkOutput
        fields = ('amount')

class RecipeSerializer(serializers.ModelSerializer):
    depth = 2
    machine = MachineSerializer()
    inputs = RecipeInputSerializer(many=True, read_only=True)
    # outputs = RecipeOutputSerializer(many=True)
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'machine', 'inputs', 'outputs', 'crafting_time', 'process_energy']
        # fields = '__all__'


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer