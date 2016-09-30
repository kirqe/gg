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
