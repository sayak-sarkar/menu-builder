<template>
  <div class="menu">
    <MenuParser :menuItems="menuItems" />
  </div>
</template>

<script>
import MenuParser from "@/components/MenuParser.vue";

export default {
  name: "Menu",
  components: {
    MenuParser,
  },
  data() {
    return {
      menuOutput: "",
      items: [
        { id: 1, name: "Company", parentId: null, isHidden: false },
        { id: 2, name: "About Us", parentId: 1, isHidden: false },
        { id: 11, name: "Contact", parentId: 1, isHidden: false },
        { id: 3, name: "Mission", parentId: 1, isHidden: false },
        { id: 12, name: "Goals", parentId: 3, isHidden: false },
        { id: 13, name: "2021", parentId: 12, isHidden: false },
        { id: 4, name: "Team", parentId: 2, isHidden: false },
        { id: 5, name: "Client 2", parentId: 10, isHidden: false },
        { id: 6, name: "Client 1", parentId: 10, isHidden: false },
        { id: 7, name: "Client 4", parentId: 10, isHidden: true },
        { id: 8, name: "Client 5", parentId: 20, isHidden: false },
        { id: 10, name: "References", parentId: null, isHidden: false },
        { id: 14, name: "Prices", parentId: null, isHidden: false },
      ],
    };
  },
  methods: {
    // Returns an array of objects which is sorted by name
    sortByName: function (items) {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    },
    // Returns alphabetically sorted by name array of children objects filtered by their parentID and checks for the isHidden parameter
    getSortedChildrenByParentId: function (id, items) {
      return this.sortByName(
        items.filter((item) => item.parentId === id && !item.isHidden)
      );
    },
    // Returns the final output in string format
    buildMenu: function (items, id, level) {
      // initialize or set values
      level = level ? level + "..." : ".";
      id = id ? id : null;

      // fetch children
      let children = this.getSortedChildrenByParentId(id, items);

      // process each child
      children.forEach((item) => {
        this.menuOutput = this.menuOutput + level + item.name + "\n";
        this.buildMenu(items, item.id, level);
      });

      return this.menuOutput;
    },
  },
  computed: {
    menuItems() {
      // Initialize a blank output menu
      return this.buildMenu(this.items);
    },
  },
};
</script>
