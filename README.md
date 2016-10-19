Creating blog layout with different number of sections:

Add a new html file to `_layouts/blog_layouts` folder with a name of layout file. (eg 2_sections.html)

Then add the following to the file:

```
---
layout: blog_layouts/blog_default
---

# header section should be included in every layout
{% include blog_sections/blog_header.html %}

# add sections that you need from _includes/blog_sections
{% include blog_sections/section_one.html %}
{% include blog_sections/section_two.html %}

```

Example of file with 7 sections is in `_posts/2016-08-21-sections-example.md`

## Use this as an example of post with all 7 sections.

```
---
layout: blog_layouts/7_sections
title:  "LOREM IPSUM DOLOR SIT AMET 4"
featured_image: 720x500.png
summary: "another summary"

meta:
  description: "LOREM IPSUM DOLOR SIT AMET 4"
  keywords: "one, two, three"
  author: "John Doe"

sections:
  section_one:
    title: Beeren<span>looks</span>
    photo:
      name: 400x600.png
      ext_url: "https://www.example.com"
      alt: alt text here
    body: |
      Himbeeren, Brombeeren, Erdbeeren - ich kann diesen Winter gar nicht genug kriegen von den bunten Früchten. Mein Tipp für lässige Looks: Color- Blocking - kombiniert die Farben in allen Facetten und schreckt auch vor wilden Kombinationen nicht zurück!
    author:
      name: Anna, 37
      position: |
        Design und Produktentwicklung
        ara Shoes Norwegen
      photo:
        name: 150x150.png
        ext_url: "https://www.example.com"
        alt: alt text here

  section_two:
    title: Farb<span>rausch</span>
    photo:
      name: 1920x1020.png
      ext_url: "https://www.example.com"
      alt: alt text here
    tip:
      title: STYLING TIPP
      body: Besonders lässig wird der Look wenn Ihr verschiedene MAterialien miteinnder kombiniert.
    caption:
      body: |
        Himbeeren, Brombeeren, Erdbeeren - ich kann diesen Winter gar nicht genug kriegen von den bunten Früchten. Mein Tipp für lässige Looks: Color- Blocking - kombiniert die Farben in allen Facetten und schreckt auch vor wilden Kombinationen nicht zurück!

  section_three:
    title: Farb<span>tupfer</span>
    photo:
      name: 400x600.png
      ext_url: "https://www.example.com"
      alt: alt text here
    body: |
      Wenn Ihr es farblich etwas kontrastreicher mögt, könnt Ihr Euer Outfit in Grau- und Schwarztönen halten und mit unseren kirschroten Ballerinas einen beerigen Farbakzent setzen! Einen Hauch Elegnaz verleiht euch die blumige Bosche. Dazu eine lässige Tasche und voilá, fertig ist der Beeren-Klassiker - der ideale All-Dy-Look für den Tag unterwegs!

  section_four:
    photo:
      name: 750x300.png
      ext_url: "https://www.example.com"
      alt: alt text here
    tip:
      title: STYLING TIPP
      body: Ergänzt den Farbakzent an euren Füßren mit einem passenden Lippenstift, so wird das Outfit richtig run!

  section_five:
    title: Creme<span>berry</span>
    photo:
      name: 400x600.png
      ext_url: "https://www.example.com"
      alt: alt text here
    body: |
      Wenn Ihr es farblich etwas kontrastreicher mögt, könnt Ihr Euer Outfit in Grau- und Schwarztönen halten und mit unseren kirschroten Ballerinas einen beerigen Farbakzent setzen! Einen Hauch Elegnaz verleiht euch die blumige Bosche. Dazu eine lässige Tasche und voilá, fertig ist der Beeren-Klassiker - der ideale All-Dy-Look für den Tag unterwegs!

  section_six:
    photo:
      name: 750x500.png
      ext_url: "https://www.example.com"
      alt: alt text here
    body: |
      Beerentöne bringenFarbe und gute Laune in die dunkele Jahreszeit und haben einen festen Platz in unserer Herbst/Wintekollektion 2016! Für weitere Inspiration stöbert einfach durch unsere aktuellen Modelle. Ein gemütlicher Schuh ist immer die optimale Basis für Euren winterlichen Lieblingslook.

  section_seven:
    title: Get <span>the look</span>
    items:
      - photo:
          name: 500x400.png
          alt: alt text here
        title: Miami
        cost: 89.95 €
        ext_url:

      - photo:
          name: 500x400.png
          alt: alt text here
        title: Kent
        cost: 89.95 €
        ext_url: /

      - photo:
          name: 500x400.png
          alt: alt text here
        title: Malmo
        cost:
        ext_url: /

      - photo:
          name: 500x400.png
          alt: alt text here
        title: Malmo
        cost: 99.95 €
        ext_url: /
---

Satte Beerentöne sind zur Zeit ein absolutes Highlight und begegnen Euch in allen Nuancen: verführerisches Rot, knalliges Pink und edle Bordeuxtöne - unsere Lieblingsfarben der aktuellen Kollektion sind vielfältig, aufregend und ein Must-Have für winterliche Looks. Unsere Designerin Anna hat drei Kombinationen für Euch zusammengestellt.

```
