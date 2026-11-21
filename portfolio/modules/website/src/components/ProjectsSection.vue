<script setup>
import ClientScale from './ClientScale.vue'
</script>

<template>
  <section class="light section" id="work">
    <div class="shell">
      <h2>Projects &amp; results</h2>
      <article class="project">
        <div>
          <p class="eyebrow">Automotive</p>
          <h3>Which components fit this truck?</h3>
          <p class="org">Volkswagen Digital Solutions / MAN Truck &amp; Bus</p>
        </div>
        <div>
          <p>
            Before specifying a prototype, a MAN engineer needs to know which
            combinations of parts a vehicle model allows. I built the services
            behind a portal where engineers can find a model, collect its
            variants and check a proposed configuration against the product
            rules.
          </p>
          <p>
            I loaded model snapshots into PostgreSQL and built a Bedrock
            assistant to compare rule sets. Engineers could start with the
            differences between two configurations when investigating a
            prototype.
          </p>
          <p class="project-result">
            <strong>≈1 GB</strong
            ><span
              >of truck-component combinations and rules analyzed with the
              assistant.</span
            >
          </p>
          <p class="stack">
            Kotlin · Java · Spring Boot · PostgreSQL · AWS Bedrock
          </p>
          <ClientScale
            label="Manufacturing context · 2025"
            source="VW Caminhões e Ônibus announcement"
            url="https://www.prnewswire.com/br/comunicados-para-a-imprensa/vw-caminhoes-e-onibus-transforma-mercado-com-conceito-sob-medida-302827574.html"
          >
            Volkswagen Caminhões e Ônibus reported <b>7,000+</b> customized
            vehicles, about <b>20%</b> of its own production.
          </ClientScale>
        </div>
      </article>
      <article class="project">
        <div>
          <p class="eyebrow">Financial services</p>
          <h3>Benefit Store</h3>
          <p class="org">Zup Innovation / Itaú Unibanco</p>
        </div>
        <div>
          <p>
            I led the team that turned a prototype into a shared benefits
            platform. Each credit-card channel could launch on the same backend,
            a change that shortened the rollout for new channels.
          </p>
          <p>
            Product partners helped us decide what to try next. On the
            engineering side, we built Java and Kotlin services for millions of
            daily requests and used end-to-end tests and production monitoring
            to check that integrations kept working as channels came on board.
          </p>
          <p class="project-result">
            <strong>Months to 1 week</strong
            ><span
              >to roll out a new channel. More than
              <b>10 credit-card channels</b> adopted the platform.</span
            >
          </p>
          <p class="stack">Java · Kotlin · Spring · Microservices · CI/CD</p>
          <ClientScale
            label="Engineering partner scale"
            source="Zup Innovation company profile"
            url="https://www.linkedin.com/company/zupinnovation/"
          >
            Zup describes its cloud application experience as reaching
            approximately <b>30 million users</b> across its work.
          </ClientScale>
        </div>
      </article>
      <h3 class="subheading">More client work</h3>
      <dl class="project-list">
        <dt>Itaú · iPhone marketplace</dt>
        <dd>
          Buying a phone in installments means checking whether the customer
          qualifies and coordinating payment, ordering and future upgrades. I
          helped design the AWS and RabbitMQ services that coordinated those
          steps.
          <ClientScale
            label="Bank-wide activity · 2025"
            source="Itaú annual filing"
            url="https://www.sec.gov/Archives/edgar/data/1132597/000113259726000132/itub-20251231.htm"
          >
            Itaú opened <b>4.6 million+</b> accounts through digital channels.
            More than <b>99%</b> of its transfers and payments were digital.
          </ClientScale>
        </dd>
        <dt>Caterpillar · Connected machines</dt>
        <dd>
          I worked on a Kafka notification system that carried events from
          connected machines to operational applications. Those applications
          could react to equipment activity as it happened. I also contributed
          to payments work during the engagement.
          <ClientScale
            label="Connected fleet · 2025"
            source="Caterpillar annual highlights"
            url="https://www.caterpillar.com/en/investors/reports/annual-report/segment-highlights.html"
          >
            Caterpillar reported <b>1.6 million+</b> connected assets reporting
            data across its fleet.
          </ClientScale>
        </dd>
        <dt>Luma Health · Healthcare messaging</dt>
        <dd>
          I worked on Node.js services that exchanged messages through RabbitMQ.
          One component could hand work to another without waiting for it to
          finish, so the two parts of a healthcare workflow could run
          independently.
          <ClientScale
            label="Platform reach · 2025–2026"
            source="Luma Health milestones"
            url="https://www.lumahealth.io/company/about"
          >
            Luma reported serving <b>1,000+</b> healthcare organizations by 2025
            and supporting <b>100 million+</b> patients by 2026.
          </ClientScale>
        </dd>
        <dt>Carelon · Healthcare APIs</dt>
        <dd>
          I developed REST endpoints in Java and Quarkus, giving other
          healthcare software a defined interface for calling backend services.
        </dd>
        <dt>Unicred · Letters of credit</dt>
        <dd>
          Members of a consórcio could request a letter of credit through the
          bank’s app. I built Java and Spring integrations on Azure that
          connected the request to the financial product’s processing rules.
          <ClientScale
            label="Cooperative network · 2025"
            source="Unicred management report (PDF)"
            url="https://unicred.com.br/site/1775745920638-relatorio-de-gestao-2025---unicred-uniaopdf.pdf"
          >
            Sistema Unicred reported approximately <b>367,000 members</b>,
            <b>366 branches</b> and <b>R$35.8 billion</b> in assets.
          </ClientScale>
        </dd>
        <dt>HDI Seguros · Insurance pricing</dt>
        <dd>
          I translated policy and pricing rules into repeatable calculations and
          connected them to the insurance application through REST APIs. I
          mentored engineers on the team and wrote Jenkins plugins we could
          reuse across builds.
          <ClientScale
            label="Insurance group · 2025"
            source="Grupo HDI sustainability report (PDF)"
            url="https://www.hdiseguros.com.br/uploads/paginas/grupohdi-pt-2025-29-04-2026-16-57.pdf"
          >
            Grupo HDI served about <b>6 million customers</b> and handled
            <b>500,000+</b> claims during the year.
          </ClientScale>
        </dd>
        <dt>Sainsbury’s · Retail services</dt>
        <dd>
          I contributed to Java and Spring microservices for retail
          applications. Each service exposed its own backend capability, which
          teams could maintain separately while keeping the applications
          connected.
          <ClientScale
            label="Retailer scale · 2025 results"
            source="Sainsbury’s annual results"
            url="https://corporate.sainsburys.co.uk/news/press-releases/preliminary-results-for-the-52-weeks-ended-1-march-2025/"
          >
            More than <b>1 million customers per week</b> used Sainsbury’s
            personalized digital savings.
          </ClientScale>
        </dd>
      </dl>
      <details class="work-archive">
        <summary>Explore more engagements</summary>
        <dl class="project-list">
          <dt>CI&amp;T · Advertising pricing</dt>
          <dd>
            I turned commercial pricing rules into Java and Oracle PL/SQL
            calculations so the same inputs produced consistent prices across
            requests.
          </dd>
          <dt>Banco Original · Digital banking</dt>
          <dd>
            At CI&amp;T, I developed backend and Angular features for the bank’s
            main web application, connecting customer-facing banking workflows
            to the services behind them.
            <ClientScale
              label="Bank-wide figures · December 2024"
              source="Banco Data compilation of central bank figures"
              url="https://www.bancodata.com.br/relatorio/original"
            >
              Banco Original had about <b>1.54 million customers</b> and
              <b>2.62 million operations</b> in its credit portfolio.
            </ClientScale>
          </dd>
          <dt>CPqD · Power network planning</dt>
          <dd>
            I combined geographic data with network planning rules in Java and
            Oracle. Planners could evaluate where electrical lines and towers
            would fit before choosing a layout.
          </dd>
          <dt>Transportadora Americana · Fleet operations</dt>
          <dd>
            I built a tracking interface that brought GPS positions, vehicle
            status and location history together for dispatch teams. I also
            developed an intranet where employees could find shared resources
            for day-to-day operations.
            <ClientScale
              label="Carrier scale · Reported in 2015"
              source="Frota&amp;Cia company coverage"
              url="https://frotacia.com.br/transportadora-americana-integra-empresas-coligadas-sob-unica-marca/"
            >
              Transportadora Americana operated approximately
              <b>400 owned vehicles</b> and employed <b>2,500 people</b>,
              alongside its affiliated carriers.
            </ClientScale>
          </dd>
          <dt>Digitale · Publishing and campaigns</dt>
          <dd>
            I built a CMS so content teams could publish updates themselves. I
            also developed Sandy’s official solo-artist site and a festival site
            where the Bridgestone Music Festival team could share event
            information with prospective attendees.
          </dd>
          <dt>Arcual · Backend services</dt>
          <dd>
            Through EPAM Anywhere, I developed Node.js application services and
            maintained the server-side JavaScript codebase.
          </dd>
          <dt>Assertiva / Thomson Reuters · Exchange software</dt>
          <dd>
            I contributed Java and Spring functionality to an international
            exchange application, using Spock and JUnit to check changes to its
            workflows.
          </dd>
          <dt>Capgemini · Enterprise web software</dt>
          <dd>
            I worked across the JSF web interface and Hibernate persistence
            layer to maintain and extend workflows in a Java enterprise
            application.
          </dd>
        </dl>
      </details>
    </div>
  </section>
</template>
