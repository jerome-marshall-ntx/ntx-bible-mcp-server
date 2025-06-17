---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Cloud Native Services
subtitle: Partner Kubernetes Distributions
---

{% include pdf_download.html %}

The Nutanix Cloud Platform is an ideal solution for running any certified Kubernetes distribution. Nutanix brings an enterprise-class platform with all the resources needed to successfully run your modern applications at scale.

Kubernetes distributions require compute, network, and storage. With Nutanix, these resources are easily accessible to IT administrators and developers to run their preferred Kubernetes distributions. Several leading Kubernetes distribution providers have certified their solutions for use with Nutanix including Red Hat OpenShift, Google Anthos, and several others. View our supported <a href="https://portal.nutanix.com/page/documents/compatibility-interoperability-matrix/software?partnerName=all&solutionType=Cloud%20Native%20%26%20DevOps&componentVersion=all&hypervisor=all&validationType=all" target="_blank">partner software solutions</a> online on the Nutanix support portal.

<table cellspacing="0" cellpadding="0" style="border:none;">
    <tr>
        <td><img src="imagesv2/cloudnative/partners/Logo-Red_Hat_OpenShift.svg" alt="OpenShift" width="240px"></td>
        <td><img src="imagesv2/cloudnative/partners/Logo-Google_Anthos.png" alt="Anthos" width="240px"></td>
        <td><img src="imagesv2/cloudnative/partners/Logo-Suse_Rancher.png" alt="Rancher" width="240px"></td>
        <td><img src="imagesv2/cloudnative/partners/Logo-D2IQ.png" alt="D2IQ" width="240px"></td>
    </tr>
</table>

#### Kubernetes architecture

All Kubernetes distributions have a base architecture with the following components at a minimum:

* etcd - the key-value store for storing all Kubernetes cluster configuration data, state data, and metadata.
* Kubernetes control plane - this includes the Kubernetes API server and other components for scheduling pods and detecting and responding to cluster events.
* Kubernetes worker nodes - Machines that host the application workloads.

![Kubernetes Cluster Components](imagesv2/cloudnative/partners/components-of-kubernetes.svg)

In addition, these components run on all Kubernetes control plane and worker nodes.

* Kubelet
* Kube-proxy
* Container runtime

Detailed information on these components can be found in the <a href="https://kubernetes.io/docs/concepts/" target="_blank">Kubernetes documentation</a>.

#### Red Hat OpenShift Container Platform
There are multiple supported installation methods for OpenShift Container Platform on Nutanix.
<a href="https://nutanix.storylane.io/share/vsiuc9v0xbvs" target="_blank">OCP is available from the Nutanix Marketplace</a> to be deployed and consumed directly as an application. <br>
From OCP 4.11 and onwards, the full stack automated <a href="https://opendocs.nutanix.com/openshift/install/ipi/" target="_blank">installer-provisioned infrastructure</a>  method is available. <br>
From OCP 4.12 and onwards, the Assisted Installer method is also supported. 


In addition, the <a href="https://nutanix.storylane.io/share/ycskaiuognzo" target="_blank">Nutanix CSI Operator</a> that provides persistent storage is readily available from the OpenShift OperatorHub.


<a href="https://portal.nutanix.com/page/documents/solutions/details?targetId=NVD-2177-Cloud-Native-6-5-OpenShift:NVD-2177-Cloud-Native-6-5-OpenShift" target="_blank">The Nutanix Validated Design</a>  for OpenShift on Nutanix is available, which is a joint validation of software, hardware and services. These are complete designs that undergone in-depth functional and scale tests to meet enterprise requirements. These solutions' modularity and pre-built nature ensure that they can be easily used in production.


#### Amazon EKS-A
EKS Anywhere is an enterprise-class solution for deploying Kubernetes clusters on premises with simplified cluster creation and integrated 3rd party software. <a href="https://anywhere.eks.amazonaws.com/docs/getting-started/production-environment/nutanix-getstarted/" target="_blank"> The Nutanix Cloud Platform and the AHV hypervisor provide supported infrastructure for EKS-A.</a>



#### Cluster API Provider Nutanix (CAPX)
Cluster API is a Kubernetes sub-project that brings declarative, Kubernetes-style APIs to cluster creation and management. <a href="https://opendocs.nutanix.com/capx/v1.2.x/getting_started/" target="_blank"> Nutanix provides an implementation of Cluster API for Nutanix Cloud Infrastructure known as CAPX</a>.
The Nutanix CSI driver is fully supported on CAPI/CAPX clusters.



#### Google Anthos 
Google Anthos can be deployed on the Nutanix Cloud Infrastructure running Nutanix AHV hypervisor using the <a href="https://cloud.google.com/anthos/clusters/docs/bare-metal/latest" target="_blank"> Anthos clusters on bare metal</a> installation method.



#### Rancher 
Rancher’s Kubernetes management tool can manage any Kubernetes cluster running on Nutanix. <a href="https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/nutanix" target="_blank"> Rancher also supports provisioning Rancher Kubernetes Engine (RKE) clusters on the Nutanix platform.</a>  
After activating Rancher’s built-in Nutanix node driver and creating a node template from it, the RKE cluster can be provisioned with node pools.



#### Azure Arc 
Nutanix Kubernetes Engine (NKE) is validated for running Azure Arc-enabled Kubernetes clusters. Via Azure Arc, Azure customers can seamlessly extend Azure’s data services and management capabilities to <a href="https://www.nutanix.dev/tag/azure/" target="_blank"> on-prem Kubernetes clusters.</a>  



#### Kubermatic
With the Nutanix and Kubermatic partnership, <a href="https://docs.kubermatic.com/kubermatic/v2.22/architecture/supported-providers/nutanix/nutanix/" target="_blank"> Nutanix is a supported infrastructure provider for the Kubermatic Kubernetes Platform.</a> 