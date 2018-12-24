<template>
  <div class="columns col-gapless">
    <div class="column col-xs-12 col-sm-10 col-md-8 col-6 col-mx-auto">
      <slot name="header"/>
      <section class="section">
        <div class="container">
          <slot/>
        </div>
      </section>
    </div>
  </div>
</template>