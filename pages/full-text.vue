<template>
  <div
    class="bg-slate-950 text-white h-screen w-screen text-xl text-justify snap-y snap-mandatory overflow-y-scroll"
    ref="mainDiv"
  >
    <section
      class="snap-center h-screen flex items-center justify-center w-screen text-center relative"
    >
      <hgroup>
        <h1 class="text-4xl font-bold">Das Waldbaur-Manifest</h1>
        <h2>
          Wie Schulen bei der Digitalisierung und Medienkompetenz scheitern
        </h2>
      </hgroup>
      <a
        id="scrollTeaser"
        class="absolute bottom-12 pt-16 cursor-pointer text-sm"
        @click="scrollToNext"
        ><span class="absolute top-0 left-1/2 w-4 h-4"></span>Mehr lesen</a
      >
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-screen justify-center"
    >
      <blockquote
        cite="https://www.linux.co.cr/free-software/research/1985/0321.html"
        class="my-12"
      >
        <p class="text-2xl md:text-3xl italic">
          Die Kontrolle über die Verwendung der eigenen Ideen bedeutet
          tatsächlich Kontrolle über das Leben anderer Menschen; und sie wird in
          der Regel verwendet, um ihr Leben schwieriger zu gestalten.
        </p>
        <footer>— Richard Stallman, <cite>Das GNU-Manifest</cite></footer>
      </blockquote>
      <p class="mb-2">
        Freie Software (oft auch „Open Source“ genannt) ist Software, die
        Benutzern grundsätzlich vier Freiheiten gewährt:
      </p>
      <ul class="mb-4 list-disc">
        <li>
          Die Freiheit, das Programm auszuführen wie man möchte, für jeden
          Zweck. (Freiheit 0)
        </li>
        <li>
          Die Freiheit, die Funktionsweise des Programms zu untersuchen und
          eigenen Datenverarbeitungbedürfnissen anzupassen. (Freiheit 1)
        </li>
        <li>
          Die Freiheit, das Programm zu redistribuieren und damit Mitmenschen zu
          helfen. (Freiheit 2)
        </li>
        <li>
          Die Freiheit, das Programm zu verbessern und diese Verbesserungen der
          Öffentlichkeit freizugeben, damit die gesamte Gesellschaft davon
          profitiert. (Freiheit 3)
        </li>
      </ul>
      <p>
        Solche Software bildet seit Jahren die Grundlage des Internets und
        unseres modernen Lebens, wie z.B. in Linux, Apache, Kubernetes, Android,
        Chrome, Firefox, WordPress.
      </p>
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-screen justify-center"
    >
      <blockquote
        cite="https://www.projekt-gutenberg.org/kant/aufklae/aufkl001.html"
        class="my-12 max-w-3xl"
      >
        <p class="text-2xl md:text-3xl max-w-4xĺ italic">Sapere aude!</p>
        <footer>
          — Immanuel Kant,
          <cite>Beantwortung der Frage: Was ist Aufklärung!</cite>
        </footer>
      </blockquote>
      <p>
        Für größere Projekte ist freie Software mittlerweile fast Standard,
        gerade durch Unternehmen, die Support für solche Produkte anbieten, wie
        z.B. SUSE, GitLab oder IBM. Gleichzeitig ist im schulischen Bereich und
        in Behörden immer noch Software weit verbreitet, mit der sich der Staat
        komplett abhängig von großen Unternehmen macht. Teilweise, wie beim
        Einsatz von MNS+ und Windows in Rheinland-Pfalz, liegt das an der
        Landesregierung, in anderen Teilen, wie beispielsweise bei Untis, sind
        jedoch auch individuelle Schulen an diesen Entscheidungen beteiligt.
      </p>
      <p>
        Schülern wird dabei im Unterricht diese Abhängigkeit von großen
        Unternehmen als normal dargestellt. So wird beispielsweise im
        Informatikunterricht oft standardmäßig von Windows ausgegangen, obwohl
        im IT-Bereich freie unixartige Betriebssysteme (Linux, FreeBSD, …) in
        großen Unternehmen wichtiger sind.
      </p>
    </section>
    <section
      class="snap-start flex flex-col w-screen h-screen pt-4 px-12 mb-20 justify-center"
    >
      <blockquote cite="https://example.com" class="my-12">
        <p class="text-2xl md:text-3xl italic">
          Auftrag der Schule ist es, alle wertvollen Anlagen der Schülerinnen
          und Schüler zur vollen Entfaltung zu bringen und ihnen ein Höchstmaß
          an Urteilskraft, gründliches Wissen und Können zu vermitteln.
        </p>
        <footer>— <cite>Schulgesetz Berlin</cite></footer>
      </blockquote>
      <p>
        Die aktuellen Ansätze zur Digitalisierung widersprechen dem schulischen
        Bildungsauftrag. Schulen sollten den Schülern auch Unabhängigkeit und
        Selbstständigkeit vermitteln. Stattdessen verbreiten sie kommerzielle
        Software immer weiter. Schüler kennen gar nichts anderes, "es machen ja
        alle so". Schulen fördern somit Monopole und stärken die fehlende
        Medienkompetenz, die bereits jetzt ein großes Problem darstellt. Und in
        Zukunft durch neue Technologien, die immer mehr Menschen frei zur
        Verfügung stehen, ein immer größeres Problem darstellen wird.
      </p>
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-screen justify-center"
    >
      <blockquote
        cite="https://www.projekt-gutenberg.org/kant/aufklae/aufkl001.html"
        class="my-12 max-w-3xl"
      >
        <p class="text-2xl md:text-3xl max-w-4xĺ italic">
          Aufklärung ist der Ausgang des Menschen aus seiner selbst
          verschuldeten Unmündigkeit.
        </p>
        <footer>
          — Immanuel Kant,
          <cite>Beantwortung der Frage: Was ist Aufklärung!</cite>
        </footer>
      </blockquote>
      <div>
        Alternative Lösungen sind oft stabil und genauso einfach zu bedienen,
        oft sogar einfacher. Das einzige, das fehlt, ist das Marketing, das die
        großen Unternehmen betreiben. Lösungen, bei denen man sich von
        Unternehmen abhängig macht, haben einige Probleme, unter anderem:
        <ul class="list-disc my-4">
          <li>Preiserhöhungen durch das Unternehmen sind möglich</li>
          <li>
            Wechsel zu anderen Systemen ist oft schwer möglich, da sich Nutzer
            an das bestehende System gewöhnen und kommerzielle Systeme das
            Übertragen von Daten in andere Software oft nicht ermöglichen
          </li>
          <li>
            Die Entwickler können Funktionen jederzeit ersatzlos entfernen
          </li>
          <li>
            Wenn man eigene Server/Hardware betreibt, können jederzeit die
            Hardwareanforderungen erhöht werden
          </li>
          <li>
            Wenn man Server mietet, ist man komplett abhängig von Wartungszeiten
            & Problemen am Standort des Anbieters
          </li>
          <li>
            Teilweise hat man keine Kontrolle über Updatezeiten sowie den Inhalt
            von Updates
          </li>
          <li>
            Man hat oft keinen Einfluss auf die Entwicklung neuer Funktionen
          </li>
          <li>Möglichkeiten für eigene Erweiterungen/Anpassungen fehlen</li>
        </ul>
        <p>
          Außerdem ist Sicherheit bei Unternehmen im Bildungsbereich oft nicht
          so wichtig. Im Jahr 2021 gelang es dem BR, personenbezogene Daten aus
          der beliebten Lern-App "Anton" zu entwenden. Die Daten waren
          unverschlüsselt und konnten von jedem beliebigen Angreifer jederzeit
          eingesehen werden.
        </p>
        <p>
          Ein anderes Beispiel sind die in Rheinland-Pfalz sehr häufig
          eingesetzten digitalen Tafeln. All diese ermöglichen jedem Schüler
          Vollzugriff auf das System über das Netzwerk. So können Schüler
          jederzeit mit der Tafel interagieren, ohne dass der Lehrer dies
          verhindern kann. Außerdem können Tafeln so permanent beschädigt
          werden.
        </p>
        <p>
          Auch MNS+, die in Rheinland-Pfalz eingesetzte Schulplattform, hat
          einige Probleme. So können Schüler z.B. über die eigentlich für Lehrer
          gedachte Fernsteuerungsfunktion die Kontrolle über den Computer ihrer
          Mitschüler übernehmen. Der Kursarbeitsmodus soll eigentlich
          verhindern, dass Schüler während einer Klassenarbeit auf das Internet
          zugreifen können. Dies kann jedoch von jedem Schüler mit wenigen
          Klicks umgangen werden. Weiterhin übermittelt MNS+ in Kombination mit
          Nextcloud Passwörter im Klartext. Diese können von jedem Schüler also
          einfach abgefangen werden. Schüler können mit weiteren Lücken das
          komplette Netzwerk einer Schule übernehmen, wenn sie das Passwort
          eines Lehrers abfangen.
        </p>
      </div>
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-screen justify-center"
    >
      <blockquote cite="https://example.com" class="my-12">
        <p class="text-2xl md:text-3xl italic">
          I could have made money this way, and perhaps amused myself writing
          code. But I knew that at the end of my career, I would look back on
          years of building walls to divide people, and feel I had spent my life
          making the world a worse place.
        </p>
        <footer>
          — Richard Stallman, <cite>Free Software, Free Society</cite>
        </footer>
      </blockquote>
      <p>
        Langfristig sind also solche Lösungen oft deutlich teurer, gerade in
        Abomodellen, bei denen man auch noch pro Benutzer bezahlt.Wenn man dann
        vergisst, Benutzer zu löschen, jedes Elternteil sich einen eigenen
        Account erstellt, oder teilweise bei Geschwistern zwei Elternaccounts
        anlegen, entstehen unnötige Kosten. Auch wenn es sich nicht um die
        gleiche Art von Software handelt: Alleine die Stadt Dortmund zahlt
        jährlich 2 Millionen Euro an Microsoft. So werden jedes Jahr Milliarden
        von Steuergeldern verschwendet, die deutlich sinnvoller eingesetzt
        werden könnten, z.B., um Schulen mit besserer Hardware auszustatten,
        oder auch für Sanierungen oder Erweiterungen.
      </p>
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-screen justify-center"
    >
      <blockquote
        cite="https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2021-1990800"
        class="my-12"
      >
        <p class="text-2xl md:text-3xl italic">
          Für öffentliche IT-Projekte schreiben wir offene Standards fest.
          Entwicklungsaufträge werden in der Regel als Open Source beauftragt,
          die entsprechende Software wird grundsätzlich öffentlich gemacht.
        </p>
        <footer>
          — Die Bundesregierung,
          <cite>Koalitionsvertrag "Mehr Fortschritt wagen"</cite>
        </footer>
      </blockquote>
      <p>
        Mittlerweile setzt sich in der Politik die Erkenntnis durch, dass freie
        Software wichtig ist. Jedoch geht dies oft nur langsam voran, auch wenn
        es bereits einige Erfolge gibt. Ein Beispiel ist der "Bundesmessenger",
        ein auf Matrix basierender Messenger, der von der Bundeswehr entwickelt
        wird. Dieser wird immer mehr auch in anderen Behörden eingesetzt. Auch
        die Bundesregierung hat sich in ihrem Koalitionsvertrag dazu bekannt,
        freie Software zu fördern.
      </p>
    </section>
    <section
      class="snap-start flex flex-col w-screen pt-4 px-12 mb-20 h-[90vh] justify-center"
    >
      <blockquote
        cite="https://online-schule.saarland/wp-content/uploads/Fuer-Erziehungsberechtigte_Flyer_Online-Schule.pdf"
        class="my-12"
      >
        <p class="text-2xl md:text-3xl italic">
          Bei der Online-Schule Saarland setzen wir außerdem auf transparente,
          weltweit verbreitete und von Bundesbehörden genutzte
          Open-Source-Lösungen.
        </p>
        <footer>
          — Bildungsministerium Saarland,
          <cite>Flyer zur Online-Schule Saarland</cite>
        </footer>
      </blockquote>
      <p>
        Ein gutes Beispiel für den Einsatz von freier Software ist die
        Online-Schule Saarland. Diese setzt auf freie Software, wie Moodle,
        BigBlueButton und Nextcloud. Dadurch ist die Schule unabhängig von
        großen Unternehmen und kann die Software an die eigenen Bedürfnisse
        anpassen. Dank offener Standards ist es auch möglich, die Software mit
        anderen Systemen zu verbinden. Außerdem ist man nicht mehr an ein
        einzelnes Unternehmen gebunden.
      </p>
    </section>
    <footer class="p-4 text-center text-sm snap-center">
      Ein Projekt von
      <a href="https://aaron-de.nirvati.org" class="underline">Aaron Dewes</a>.
    </footer>
  </div>
</template>

<script lang="ts" setup>
const mainDiv = ref<HTMLDivElement | null>(null);
onMounted(() => {
  // If the user presses space, scroll to the next section
  window.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.code === "Space" || event.code === "ArrowDown") {
      scrollToNext();
    } else if (event.code === "ArrowUp") {
      mainDiv.value!.scrollBy({
        top: -window.innerHeight * 0.25,
        behavior: "smooth",
      });
    }
  });
});

function scrollToNext() {
  mainDiv.value!.scrollBy({
    top: window.innerHeight * 0.25,
    behavior: "smooth",
  });
}
</script>

<style scoped>

#scrollTeaser span {
  margin-left: -10px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
  animation: arrow-move 1.5s infinite;
  box-sizing: border-box;
}

@keyframes arrow-move {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: rotate(-45deg) translate(-13px, 13px);
    opacity: 0;
  }
}
</style>