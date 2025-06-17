---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
is_section_toc: yes
title: Cloud Native Services
subtitle:
---

{% include pdf_download.html %}

The CNCF defines cloud native as "a set of technologies that empower organizations to build and run scalable applications in modern, dynamic environments such as public, private and hybrid clouds". The primary technologies driving this shift to application modernization include containers, microservices, and Kubernetes.

Nutanix Cloud Infrastructure (NCI) is the ideal foundation for cloud-native workloads running on Kubernetes at scale. Nutanix provides platform mobility, allowing you to run workloads on your Nutanix private and public cloud. The Nutanix architecture was designed with hardware failures in mind, offering better resilience for Kubernetes platform components and application data. With the addition of each NCI node, you benefit from the scalability and resilience provided to the Kubernetes compute nodes. Equally important, an additional storage controller deploys with each HCI node, which results in better storage performance for your stateful containerized applications.

Nutanix Kubernetes Platform (NKP) is an enterprise-ready, cloud-native platform that simplifies Kubernetes management and deployment across various infrastructures, including cloud, multi-cloud, hybrid cloud, on-premises, edge, and air-gapped environments. NKP enables faster deployment of production-ready cloud-native environments and integrates with other Nutanix products like Nutanix Cloud Infrastructure (NCI), Nutanix Unified Storage, and Nutanix Database Service to deliver a consistent platform for containers and virtual machines across different cloud environments.

<div data-type="note" class="note">
  <h6>Note</h6>
  <h5>Existing NKE Customers</h5>
  <p>Nutanix Kubernetes Engine (NKE) customers can migrate to Nutanix Kubernetes Platform (NKP) 2.12 or later. There will be no further NKE releases after 2.10.</p>
</div>

NUS provides persistent and scalable software-defined storage to the Kubernetes clusters. These include block and file storage via the [Nutanix CSI driver](https://portal.nutanix.com/page/documents/details?targetId=CSI-Volume-Driver-v3_0:CSI-Volume-Driver-v3_0) and S3-compatible object storage via the [Nutanix COSI driver](https://github.com/nutanix-cloud-native/cosi-driver-nutanix). Furthermore, with NDB, you can provision and operate databases at scale using the [NDB Kubernetes Operator](https://artifacthub.io/packages/helm/nutanix/ndb-operator).


The following chapters will cover these in more detail:
