<template>
  <div
    class="bg-slate-950 text-white h-screen flex items-center justify-center w-screen text-center"
  >
    <blockquote
      :cite="qoutes[quote].url"
      class="mx-12"
      v-if="isQuote"
      :class="{
        'animate-fadeOut': isFadingOut,
        'animate-fadeIn': !isFadingOut,
      }"
    >
      <p class="text-3xl max-w-4xl">
        {{ qoutes[quote].text }}
      </p>
      <footer>
        — {{ qoutes[quote].author }}, <cite>{{ qoutes[quote].document }}</cite>
      </footer>
    </blockquote>
    <p
      v-else
      class="max-w-4xl"
      :class="{
        'text-xl': text === 1 || text === 2,
        'text-3xl': text > 2,
        'text-4xl': text === 0,
        'animate-fadeOut': isFadingOut,
        'animate-fadeIn': !isFadingOut,
      }"
      v-html="texts[text]"
    ></p>
  </div>
</template>

<script setup lang="ts">
type Quote = {
  text: string;
  url?: string;
  author?: string;
  document?: string;
};
const qoutes: Quote[] = [
  {
    text: "Die Kontrolle über die Verwendung der eigenen Ideen bedeutet tatsächlich Kontrolle über das Leben anderer Menschen; und sie wird in der Regel verwendet, um ihr Leben schwieriger zu gestalten.",
    url: "https://www.linux.co.cr/free-software/research/1985/0321.html",
    author: "Richard Stallman",
    document: "Das GNU-Manifest",
  },
  {
    text: "Sapere aude!",
    author: "Immanuel Kant",
    document: "Beantwortung der Frage: Was ist Aufklärung?",
    url: "https://www.projekt-gutenberg.org/kant/aufklae/aufkl001.html",
  },
  {
    text: "Auftrag der Schule ist es, alle wertvollen Anlagen der Schülerinnen und Schüler zur vollen Entfaltung zu bringen und ihnen ein Höchstmaß an Urteilskraft, gründliches Wissen und Können zu vermitteln.",
    author: "Berlin",
    document: "Schulgesetz",
  },
  {
    text: "Aufklärung ist der Ausgang des Menschen aus seiner selbst verschuldeten Unmündigkeit.",
    author: "Immanuel Kant",
    document: "Beantwortung der Frage: Was ist Aufklärung?",
    url: "https://www.projekt-gutenberg.org/kant/aufklae/aufkl001.html",
  },
  {
    text: "I could have made money this way, and perhaps amused myself writing code. But I knew that at the end of my career, I would look back on years of building walls to divide people, and feel I had spent my life making the world a worse place.",
    author: "Richard Stallman",
    document: "Free Software, Free Society",
  },
  {
    text: "Für öffentliche IT-Projekte schreiben wir offene Standards fest. Entwicklungsaufträge werden in der Regel als Open Source beauftragt, die entsprechende Software wird grundsätzlich öffentlich gemacht.",
    author: "Die Bundesregierung",
    document: 'Koalitionsvertrag "Mehr Fortschritt wagen"',
    url: "https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2021-1990800",
  },
  {
    text: "Bei der Online-Schule Saarland setzen wir außerdem auf transparente, weltweit verbreitete und von Bundesbehörden genutzte Open-Source-Lösungen",
    author: "Bildungsministerium Saarland",
    document: "Flyer zur Online-Schule Saarland",
    url: "https://online-schule.saarland/wp-content/uploads/Fuer-Erziehungsberechtigte_Flyer_Online-Schule.pdf",
  }
];
const texts = [
  "Das Waldbaur-Manifest",
  "Wie Schulen bei der Digitalisierung und Medienkompetenz scheitern",
  "Ein Projekt von Aaron Dewes",
  "Freie Software (oft auch „Open Source“ genannt) ist Software, die Benutzern grundsätzlich vier Freiheiten gewährt:",
  "Die Freiheit, das Programm auszuführen wie man möchte, für jeden Zweck. (Freiheit 0)",
  "Die Freiheit, die Funktionsweise des Programms zu untersuchen und eigenen Datenverarbeitungbedürfnissen anzupassen. (Freiheit 1)",
  "Die Freiheit, das Programm zu redistribuieren und damit Mitmenschen zu helfen. (Freiheit 2)",
  "Die Freiheit, das Programm zu verbessern und diese Verbesserungen der Öffentlichkeit freizugeben, damit die gesamte Gesellschaft davon profitiert. (Freiheit 3)",
  "Solche Software bildet seit Jahren die Grundlage des Internets und unseres modernen Lebens, wie z.B. in Linux, Apache, Kubernetes, Android, Chrome, Firefox, WordPress.",
  "Für größere Projekte ist freie Software mittlerweile fast Standard, gerade durch Unternehmen, die Support für solche Produkte anbieten, wie z.B. SUSE, GitLab oder IBM.",
  "Gleichzeitig ist im schulischen Bereich und in Behörden immer noch Software weit verbreitet, mit der sich der Staat komplett abhängig von großen Unternehmen macht.",
  "Teilweise, wie beim Einsatz von MNS+ und Windows in Rheinland-Pfalz, liegt das an der Landesregierung.",
  "In anderen Teilen, wie beispielsweise bei Untis, sind jedoch auch individuelle Schulen an diesen Entscheidungen beteiligt.",
  "Dabei wird teilweise Schülern im Unterricht diese Abhängigkeit von großen Unternehmen als normal dargestellt.",
  "So wird beispielsweise im Informatikunterricht oft standardmäßig von Windows ausgegangen, obwohl im IT-Bereich freie unixartige Betriebssysteme (Linux, FreeBSD, …) sehr wichtig sind.",
  "Dies widerspricht dem schulischen Bildungsauftrag. Schulen sollten den Schülern auch Unabhängigkeit und Selbstständigkeit vermitteln.",
  "So verbreitet sich kommerzielle Software immer weiter. Schüler kennen gar nichts anderes, es machen ja alle so...",
  "Schulen fördern somit Monopole und stärken die fehlende Medienkompetenz, die bereits jetzt ein großes Problem darstellt.",
  "Alternative Lösungen sind oft stabil und genauso einfach zu bedienen, oft sogar einfacher.",
  "Das einzige, das fehlt, ist das Marketing, das die großen Unternehmen betreiben.",
  "Lösungen, bei denen man sich von Unternehmen abhängig macht, haben einige Probleme, unter anderem:",
  "Preiserhöhungen durch das Unternehmen sind möglich",
  "Wechsel zu anderen Systemen ist oft schwer möglich, da sich Nutzer an das bestehende System gewöhnen und solche Systeme das Übertragen von Daten in andere Software oft nicht ermöglichen",
  "Die Entwickler können Funktionen jederzeit ersatzlos entfernen ",
  "Wenn man eigene Server/Hardware betreibt, können jederzeit die Hardwareanforderungen erhöht werden",
  "Wenn man Server mietet, ist man komplett abhängig von Wartungszeiten & Problemen am Standort des Anbieters",
  "Teilweise hat man keine Kontrolle über Updatezeiten sowie den Inhalt von Updates",
  "Man hat oft keinen Einfluss auf die Entwicklung neuer Funktionen",
  "Systeme für eigene Erweiterungen fehlen",
  "Sicherheit ist bei Unternehmen im Bildungsbereich oft nicht so wichtig.",
  "Im Jahr 2021 gelang es dem BR, personenbezogene Daten aus der beliebten Lern-App Anton zu entwenden.",
  "Die Daten waren unverschlüsselt und konnten von jedem beliebigen Angreifer jederzeit eingesehen werden.",
  "Ein anderes Beispiel sind die in Rheinland-Pfalz sehr häufig eingesetzten digitalen Tafeln.",
  "All diese ermöglichen jedem Schüler Vollzugriff auf das System über das Netzwerk.",
  "So können Schüler jederzeit mit der Tafel interagieren, ohne dass der Lehrer dies verhindern kann.",
  "Außerdem können Tafeln so permanent beschädigt werden.",
  "Auch MNS+ hat einige Sicherheitslücken, z.B. im Kursarbeitsmodus. Außerdem können Schüler die für Lehrer gedachte Fernsteuerungsfunktion nutzen.",
  "Langfristig sind also solche Lösungen oft deutlich teurer, gerade in Abomodellen, bei denen man auch noch pro Benutzer bezahlt.",
  "Wenn man dann vergisst, Benutzer zu löschen, jedes Elternteil sich einen eigenen Account erstellt, oder teilweise bei Geschwistern zwei Elternaccounts anlegen, entstehen unnötige Kosten.",
  "Auch wenn es sich nicht um die gleiche Art von Software handelt: Alleine die Stadt Dortmund zahlt jährlich 2 Millionen Euro an Microsoft.",
  "So werden jedes Jahr Milliarden von Steuergeldern verschwendet, die deutlich sinnvoller eingesetzt werden könnten,",
  "z.B., um Schulen mit besserer Hardware auszustatten, oder auch für Sanierungen oder Erweiterungen.",
  "Mittlerweile setzt sich in der Politik die Erkenntnis durch, dass freie Software wichtig ist.",
  "Jedoch geht dies oft nur langsam voran, auch wenn es bereits einige Erfolge gibt.",
  'Ein Beispiel ist der "Bundesmessenger", ein auf Matrix basierender Messenger, der von der Bundeswehr entwickelt wird.',
  "Dieser wird immer mehr auch in anderen Behörden eingesetzt.",
  "Auch die Bundesregierung hat sich in ihrem Koalitionsvertrag dazu bekannt, freie Software zu fördern.",
  "Ein gutes Beispiel für den Einsatz von freier Software ist die Online-Schule Saarland.",
  "Diese setzt auf freie Software, wie Moodle, BigBlueButton und Nextcloud.",
  "Dadurch ist die Schule unabhängig von großen Unternehmen und kann die Software an die eigenen Bedürfnisse anpassen.",
  "Dank offener Standards ist es auch möglich, die Software mit anderen Systemen zu verbinden.",
  "Außerdem ist man nicht mehr an ein einzelnes Unternehmen gebunden.",
  "Aus diesen Gründen baut Waldbaur auf freie Software.",
  "Wir bieten eine große Auswahl an freier Software an, die wir auch selbst nutzen.",
  "All unsere Software ist auf Schulen optimiert.",
  "Vielen Dank für Ihre Aufmerksamkeit!"
];

const quote = ref(0);
const text = ref(0);
const isQuote = ref(false);
const isFadingOut = ref(false);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playNext(
  perform: () => void | Promise<void>,
  showFor = 5000,
  waitAfterFadeOut = 2100
) {
  await perform();
  isFadingOut.value = false;
  await sleep(showFor);
  isFadingOut.value = true;
  await sleep(waitAfterFadeOut);
}

onMounted(async () => {
  // TITEL
  await sleep(2500);
  isFadingOut.value = true;
  await sleep(2500);
  await playNext(() => {
    text.value++;
  }, 2500);
  await playNext(() => {
    text.value++;
  }, 2500);
  // Die Kontrolle über die Verwendung der eigenen Ideen...
  await playNext(() => {
    isQuote.value = true;
  }, 6000);
  await playNext(() => {
    isQuote.value = false;
    text.value++;
  }, 4000);
  // Freie Software
  for (let i = 0; i < 6; i++) {
    await playNext(() => {
      text.value++;
    });
  }

  // Sapere aude
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });

  // Für größere Projekte...
  await playNext(() => {
    text.value++;
    isQuote.value = false;
  });
  for (let i = 0; i < 4; i++) {
    await playNext(() => {
      text.value++;
    });
  }

  // Auftrag der Schule
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });
  for (let i = 0; i < 5; i++) {
    await playNext(() => {
      isQuote.value = false;
      text.value++;
    }, 6000);
  }
  // Aufklärung ist der Ausgang des Menschen...
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });
  for (let i = 0; i < 17; i++) {
    await playNext(() => {
      isQuote.value = false;
      text.value++;
    }, 5500);
  }

  // I could have made money this way...
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });
  for (let i = 0; i < 5; i++) {
    await playNext(() => {
      isQuote.value = false;
      text.value++;
    });
  }
  
  // Für öffentliche IT-Projekte...
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });
  for (let i = 0; i < 5; i++) {
    await playNext(() => {
      isQuote.value = false;
      text.value++;
    });
  }

  // Bei der Online-Schule Saarland...
  await playNext(() => {
    quote.value++;
    isQuote.value = true;
  });
  for (let i = 0; i < 8; i++) {
    await playNext(() => {
      isQuote.value = false;
      text.value++;
    });
  }

  // Vielen Dank für Ihre Aufmerksamkeit!
  text.value++;
  isFadingOut.value = false;
});
</script>

<style></style>
