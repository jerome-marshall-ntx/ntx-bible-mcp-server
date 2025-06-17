---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Basics
subtitle: Where We Started
---

{% include pdf_download.html %}

<!-- crasmussen@nutanix.com 2024-04-16 - "Strategy And Vision" renamed to "Where We Started -->

<!-- laura@nutanix.com 2021-06-02 - No more Book of Webscale (was part of Brief Lesson in History). This paragraph has been changed and moved to the intro.
As described in the generalized 'Book of Webscale', Nutanix leverages these principles throughout the stack. This section will cover these basics as well as the core architectural concepts. 
-->

When Nutanix was conceived it was focused on one goal: 

**Make infrastructure computing invisible, anywhere.**

This simplicity was to be achieved by focus in three core areas:

1. Enable choice and portability (HCI/Cloud/Hypervisor)
2. Simplify the "stack" through convergence, abstraction and intelligent software (AOS)
3. Provide an intuitive user interface (UI) through focus on user experience (UX) and design (Prism)

##### HCI/Cloud/Hypervisor: "The Choice"

Though we started with a single hardware platform (NX) supporting a single hypervisor (ESXi), we've always known we were more than a single hypervisor/platform/cloud company. This was one of the reasons we chose to build our own UI from scratch vs. run as a plug-in in vCenter, run as a VM vs. natively in the kernel (a lot more reasons there), etc. Why you may ask? Choice.

Not one hypervisor, platform, or cloud will fit all customer's needs. By supporting multiple under the same platform we give the customer choice and leverage. By giving them the ability to move between them, we give them flexibility. All delivered with the same experience since it's all part of the Nutanix platform.

We now have support for over 12 different hardware platforms (direct/OEM/third-party), multiple hypervisors (AHV, ESXi, Hyper-V, etc.), and expanding integrations with all of the major cloud vendors (AWS, Azure, GCP). This allows the customer to choose what is best for them, as well as use this for negotiations purposes between vendors.

NOTE: Platform is one key word that is used throughout the section and in general. We're not trying to build one-off products, we're building a platform.

The following shows a high-level architecture of the Nutanix platform:

![Nutanix Platform - Architecture](imagesv3/arch_v4.png)
Nutanix Platform - Architecture

##### AOS + AHV/Hypervisor: "The Runtime"

We started this journey by simplifying storage with a feature called the Distributed Storage Fabric (DSF then known as the Nutanix Distributed Filesystem aka NDFS), which combined local storage resources with intelligent software to provide "centralized storage" like capabilities.

Over the years, we've added a great deal of features and capabilities. To simplify things these have been broken down into two core areas:

1. Core Services
	* Foundational services
2. Platform Services
	* Services building upon core services providing additional capabilities/services

The core provides the foundational services and components that facilitate the running of workloads (VMs/Containers) and other higher-level Nutanix services. In the beginning this was just the DSF product, however we continue to expand the platform's capabilities to help simplify and abstract the stack.

The following shows a high-level view of the AOS core platform:

![Nutanix Platform - AOS Core](imagesv2/arch_v2_core.png)
Nutanix Platform - AOS Core

Over the years this has expanded into things like abstracting virtualization (we believe this should be something transparent and part of the system) by introducing our own hypervisor (AHV), simplifying upgrades, and providing other essential services like security and encryption.

With these capabilities we solved for a lot of the infrastructure level issues, but we didn't stop there. People still needed additional services like file shares, object storage, or containers.

Rather than requiring customers to use other vendors and products for some services we figured which ones we should partner on and which ones we should build ourselves. For backup we partnered with vendors like Veeam and Hycu, for others like file and object services we built them as services into the platform.

The following shows a high-level view of the Nutanix platform services:

![Nutanix Platform - Services](imagesv2/arch_v2_platform.png)
Nutanix Platform - Services

##### Prism: "The Interface"

![Nutanix Platform - Prism](imagesv2/arch_v2_prism.png)
Nutanix Platform - Prism

Simply put, apply some of the design principles fostered by companies like Apple focused on simplicity, consistency and intuitiveness. Since the beginning we've invested significant time and effort on the Nutanix product's "front-end". Rather than being an afterthought, the UI/UX and design teams have always been pushing the boundaries. Case in point, we were one of the first enterprise software companies (besides the SaaS players), to have the management UI be written in HTML5.

Another core item here is the focus on providing a single interface for the platform and keeping the experience consistent throughout that. Our goal is to converge UIs like we've converged infrastructure. We want Prism to be a single interface allowing you to manage and consume the Nutanix platform, whether that is managing virtualization in your datacenter, Desktops-as-a-Service in the cloud, or providing spend visibility.

This is important as we continue to expand the platform through feature / service creation and acquisition. Rather than bolting the new capabilities on, we'd rather spend the time to natively integrate them into the platform. It is a slower process, but in the long run it keeps the experience consistent and reduces risk.

##### Nutanix: The Platform

To summarize, our vision is simple: “One platform to run applications and data anywhere.”

![Nutanix Platform - Architecture](imagesv3/arch_v4.png)
Nutanix Platform - Architecture

This has been our goal from close to the beginning. Testament to this, below is an image created circa 2014 to talk about the Nutanix platform architecture. As you can see not much has changed, we just continue expanding and working towards this goal.

![Nutanix Platform - Circa 2014](imagesv2/arch_all.png)
Nutanix Platform - Circa 2014
