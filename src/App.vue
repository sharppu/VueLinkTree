<template>
  <Tree :value="nodes">
    <template #url="{ node }">
      <a :href="node.data">{{ node.label }}</a>
    </template>
  </Tree>
</template>

<script>
export default {
  name: "App",
  setup() {
    let name = "chris";
    let age = 19;
    let nodes = [
      {
        key: 0,
        label: "test1",
        children: [
          {
            key: 0 - 0,
            label: "test0.1",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 0 - 1,
            label: "test0.2",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 0 - 2,
            label: "test0.3",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 0 - 3,
            label: "test0.4",
            data: "https://www.google.com",
            type: "url",
          },
        ],
      },
      {
        key: 1,
        label: "test2",
        children: [
          {
            key: 1 - 0,
            label: "test1.1",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 1 - 1,
            label: "test1.2",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 1 - 2,
            label: "test1.3",
            data: "https://www.google.com",
            type: "url",
          },
          {
            key: 1 - 3,
            label: "test1.4",
            data: "https://www.google.com",
            type: "url",
          },
        ],
      },
    ];

    return { name, age, nodes };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
