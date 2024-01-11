<template>
  <dialog open>
    <form method="dialog">
      <button>OK</button>
    </form>
    <p>This modal dialog has a groovy backdrop!</p>
  </dialog>
</template>
<style>
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
</style>
