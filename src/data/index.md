---
layout: default
---

<div style="text-align: center;">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="90px" height="90px">
  <path class="cls-1" d="m39.44,32.85c.12.1.16.27.11.41-.05.15-.19.24-.35.24h-8.05c-.09,0-.18-.03-.24-.09l-8.84-7.65c-.08-.07-.13-.17-.13-.28s.05-.21.13-.28l4.02-3.48c.14-.12.35-.12.49,0l12.87,11.14Zm-13.36-14.56c.07.06.16.09.24.09s.17-.03.24-.09l12.87-11.14c.12-.1.16-.27.11-.41-.05-.15-.19-.24-.35-.24h-8.05c-.09,0-.18.03-.24.09l-8.84,7.65c-.08.07-.13.17-.13.28s.05.21.13.28l4.02,3.48Zm-1.69,1.71c0-.11-.05-.21-.13-.28L9.1,6.59c-.07-.06-.15-.09-.24-.09H.8c-.16,0-.3.1-.35.24-.05.15-.01.31.11.41l14.84,12.85L.56,32.85c-.12.1-.16.27-.11.41.05.15.19.24.35.24h8.05c.09,0,.18-.03.24-.09l15.17-13.13c.08-.07.13-.17.13-.28Z" fill="#131313" id="Fill-1"></path>
</svg>
</div>


<h1><a href="/">{{ site.title }}</a></h1>

Welcome to {{ site.title }}!

Feel free to use the menu to search for a topic or browse the various sections below! You can also [download the complete Nutanix Cloud Bible as a PDF](pdf/classic.pdf "Download Nutanix Cloud Bible Classic Version as a PDF").

<div>
  {% for parent in site.data.home %}

    {% if parent.render == true %}

      <p class="section_heading">{{ parent.title }}</p>

      {% if parent.has_grandchildren == true %}

        {% for child in parent.children %}

          {% if child.render != false %}

            {% if child.url != "" %}

              <p class="section_subheading"><a href="{{ child.url }}">{{ child.title }}</a><span class="section_desc">{{ child.desc }}</span></p>

            {% else %}

              <p class="section_subheading">{{ child.title }}</p>

            {% endif %}

            {% for grandchild in child.children %}

              <p><a href="{{ grandchild.url }}">{{ grandchild.title }}</a><span class="section_desc">{{ grandchild.desc }}</span></p>

            {% endfor %}

          {% endif %}

        {% endfor %}

      {% else %}

        {% for child in parent.children %}

          <p><a href="{{ child.url }}">{{ child.title }}</a><span class="section_desc">{{ child.desc }}</span></p>

        {% endfor %}

        {% endif %}

    {% endif %}

  {% endfor %}
</div>

<p>&nbsp;</p>

Have feedback? Find a typo?  Send feedback to <a id="feedback" href="">biblefeedback@<!-- no bots -->nutanix.com</a>.

Stay up to date by checking out the [Nutanix Cloud Bible Release Notes](release_notes.html)!

To learn more about Nutanix, check it out for yourself by taking a [Nutanix Test Drive](https://www.nutanix.com/one-platform?utm_source=nutanixbible&utm_medium=referral)!

Thank you for reading {{ site.title }}!  Stay tuned for many more upcoming updates and enjoy the Nutanix platform!
