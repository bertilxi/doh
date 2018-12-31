<template>
  <div class="container grid-xl">
    <div class="columns">
      <div class="column col-sm-12 col-md-10 col-8 col-mx-auto">
        <slot name="header"/>
        <section class="section">
          <slot/>
        </section>
      </div>
    </div>
  </div>
</template>