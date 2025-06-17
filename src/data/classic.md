--- 
layout: default 
title: Nutanix Cloud Bible
subtitle: Single Page Classic Edition
---

<img src="assets/Nutanix-Ident-X-Charcoal-Gray-Digital.png" alt="" class="biblesvg">

<h1 id="main_heading">{{ site.title }} - Classic Edition</h1>

<a href="/pdf/nutanix_cloud_bible_classic_edition.pdf" title="Download {{ site.title }} Classic Version as PDF" target="_blank">&raquo;&nbsp;Download {{ site.title }} Classic Version as PDF (opens in a new tab/window)</a>

<div class="alert alert-warning" style="border-left: 6px solid var(--bs-warning-border-subtle);">
<strong>Known issue</strong>: {{ site.title }} Classic Edition contains a known issue that prevents some sidebar links from navigating to the correct location.  A fix for this issue will be deployed as soon as possible.
</div>

<p>Welcome to the classic edition of {{ site.title }} The purpose of the {{ site.title }} is to provide in-depth technical information about the Nutanix platform architecture.
</p>

<div>
{% for parent in site.data.home %}

    {% if parent.render == true %}

      {% comment %} Top level i.e. Basics, Hybrid Multicloud, Modern Applications and AI/ML {% endcomment %}
      <p class="section_heading">{{ parent.title }}</p>

      {% comment %} Only runs for Basics; no others have has_grandchildren set to true {% endcomment %}
      {% if parent.has_grandchildren == true %}

        {% for child in parent.children %}

          {% if child.render != false %}

            {% if child.url != "" %}

              {% comment %} Displays for the top-level Basic section as that's the only one with has_grandchildren set to True {% endcomment %}
              <p class="section_subheading"><a href="{{ child.url }}">{{ child.title }}</a><span class="section_desc">{{ child.desc }}</span></p>

              {% for page in site.pages %}

                {% assign page_url = page.url | remove_first: "/" %}
          
                {% if page_url == child.url %}

				  {% for page in site.pages %}

					{% assign page_url = page.url | remove_first: "/" %}
			  
					{% if page_url == child.url %}

                      {% comment %} This is ONLY the content of 2-basic.html right now {% endcomment %}
					  {{ page.content }}

					{% endif %}
	 
				  {% endfor %}

                {% endif %}
 
              {% endfor %}

            {% else %}

              {% comment %} Compute, Storage, Networking {% endcomment %}
              <p class="section_subheading">{{ child.title }}</p>

            {% endif %}

            {% for grandchild in child.children %}

              {% comment %} Displays for AHV, vSphere, Hyper-V, Backup/DR etc {% endcomment %}
              <p><a href="{{ grandchild.url }}">{{ grandchild.title }}</a><span class="section_desc">{{ grandchild.desc }}</span></p>

              {% comment %} Page content for top-level Basic pages {% endcomment %} 
              {% for ggrandchild in grandchild.children %}

                {% for page in site.pages %}

                  {% assign page_url = page.url | remove_first: "/" %}

                  {% if page_url == ggrandchild.url %}

                    {{ page.content }}

			      {% endif %}
	 
				{% endfor %}

              {% endfor %}

            {% endfor %}

          {% endif %}

        {% endfor %}

      {% else %}

        {% for child in parent.children %}

          <h3><a href="{{ child.url }}">{{ child.title }}</a><span class="section_desc">{{ child.desc }}</span></h3>

          {% for page in site.pages %}

            {% assign page_url = page.url | remove_first: "/" %}
            {% assign page_id = page.title | replace: " ", "-" | replace: "/", "-" | downcase %}
          
              {% if page_url == child.url %}

                {% comment %} Content of child pages for sections that don't explictly set has_grandchildren to true {% endcomment %}
                {{ page.content }}

                {% for grandchild in child.children %}

                  {% for page in site.pages %}

                    {% assign gpage_url = page.url | remove_first: "/" %}
                    {% assign gpage_id = page.title | replace: " ", "-" | replace: "/", "-" | downcase %}

                    {% if gpage_url == grandchild.url %}

                      {% comment %} Content of grandchild pages for sections that don't explictly set has_grandchildren to true {% endcomment %}
                      {{ page.content }}
     
                    {% endif %}

                  {% endfor %}
				{% endfor %}

              {% endif %}
 
            {% endfor %}

          {% endfor %}

       {% endif %}

    {% endif %}

  {% endfor %}

</div>

<p>Have feedback? Find a typo? Send feedback to biblefeedback at nutanix dot com</p>
<p>To learn more about Nutanix, check it out for yourself by taking a <a href="https://www.nutanix.com/one-platform?utm_source=nutanixbible&utm_medium=referral">Nutanix Test Drive</a>!</p>
<p>Thank you for reading {{ site.title }}! Stay tuned for many more upcoming updates and enjoy the Nutanix Cloud Platform!</p>
