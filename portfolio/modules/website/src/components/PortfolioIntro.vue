<template>
  <section class="hero">
    <div class="shell hero-inner">
      <img
        alt="Portrait of Juliano Sena"
        class="hero-portrait"
        fetchpriority="high"
        height="720"
        :src="'./media/juliano.webp'"
        width="540"
      />
      <div class="hero-copy">
        <p class="eyebrow">Senior backend engineer &amp; technical lead</p>
        <h1>Juliano Sena</h1>
        <p class="authorization">
          <strong>U.S. Green Card holder</strong
          ><span
            >Authorized to work in the United States without sponsorship.</span
          >
        </p>
        <p class="intro">
          I build Java and Kotlin services and mentor the engineers who maintain
          them. My work brings me alongside product teams, from figuring out
          which truck components fit together to launching benefits for bank
          customers.
        </p>
        <div class="actions">
          <a class="button" href="#work">Explore my work</a
          ><a class="text-link" download="" href="Juliano-Sena-Resume.pdf"
            >Download resume <small>PDF</small></a
          >
        </div>
      </div>
    </div>
  </section>
  <div class="metrics shell">
    <div><strong>14+</strong><span>Years in engineering</span></div>
    <div><strong>4–10</strong><span>Engineers per team led</span></div>
    <div><strong>Millions</strong><span>Daily platform requests</span></div>
  </div>
</template>
