---
layout: page
# set to "yes" (without quotes) if this page is part of a "book"
is_book: no
title: Cloud Native Services
subtitle: Nutanix Kubernetes Platform (NKP)
versions:
    pc_version: 2024.1
    nkp_version: 2.12
    ahv_version: 6.5, 6.8 or higher
---

{% include pdf_download.html %}

Nutanix Kubernetes Platform (NKP) provides a consistent experience for deploying and managing Kubernetes clusters at scale across on-premises, edge locations, and public cloud environments.  

This platform meets developers' demands by providing pure upstream, open-source Kubernetes with strategically selected best-of-breed infrastructure applications, which are critical for running Kubernetes in a production environment. <a href="https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_12:top-platform-apps-c.html" target="_blank">View all out-of-the-box applications</a>.  

![Nutanix Kubernetes Platform](imagesv3/nkp/nkp_intro.png)

#### Supported Configurations

The solution applies to the configurations below:

Core Use Case(s):

* Containers
* Microservices
* GenAI frameworks
* Application modernization
* Edge computing
* Commercial off-the-shelf products

Supported Environments:

* Nutanix
* vSphere
* Public Clouds (AWS, Azure, and GCP)
* Pre-provisioned (bare metal and VMs)

Locations: 

* On-premises
* Public cloud

![NKP in Hybrid Multicloud Environment](imagesv3/nkp/hybrid_multicloud.png)

Supported OS image(s):

* Rocky Linux, Ubuntu, Flatcar, Bring Your Own Image (BYOI), <a href="https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_12:top-nkp-supported-OS-c.html" target="_blank">view list of supported images</a>

Management interfaces(s):

* NKP UI
* NKP CLI
* kubectl

Upgrades:

* NKP CLI

Compatible Features:

* Multi-cluster lifecycle operations
* Built-in multi-tenancy
* GitOps
* Autoscaling & self-healing
* Customizable observability and logging dashboards
* GPU operator support
* AI-assisted chatbot
* Application catalog
* Cost management

Air-gapped Environments:

NKP supports air-gapped deployments, enabling organizations to run production Kubernetes in secure, isolated environments. This includes on-premises and cloud-based air-gapped environments.

![NKP in Air-gapped environment](imagesv3/nkp/airgapped.png)

#### Cluster Types

NKP can be deployed as a single self-managed cluster or in a multi-cluster architecture. The different cluster types for these two environments are:

  * _Management Cluster_ hosts NKP, is self-managed, and manages other clusters.
  * _Managed Clusters_ are NKP-created workload clusters fully managed by the NKP Management cluster.
  * _Attached Clusters_ are externally created workload clusters connected to NKP for application management.

![NKP in multicluster environment](imagesv3/nkp/multicluster.png)

#### Hybrid Cloud Fleet Management

NKP Fleet Management simplifies Kubernetes cluster management across on-prem, cloud, and edge environments, providing security, visibility, automation, and governance features to ensure consistency and security. It also enables centralized management of clusters allocated to different departments or lines of business through Workspaces.

![Hybrid cloud fleet management](imagesv3/nkp/fleet_mgmt.png)

#### Architecture

The Nutanix Kubernetes Platform (NKP) architecture consists of several key components.

![NKP architecture](imagesv3/nkp/Architecture.png)

##### Management Cluster

The management cluster serves as the central hub for NKP operations. It hosts the managers, which are controllers responsible for managing cluster and application operations.

  * _Cluster Managers_ are responsible for managing the lifecycle of clusters. The primary controller is the Cluster API controller, which supports the lifecycle management of Kubernetes clusters.
  * _Application Managers_ handle environment-level integrations such as authentication, authorization, and other tasks.

##### Key Components

**Cluster API**

Cluster API (CAPI) is a crucial component of NKP, providing a standardized way to manage the lifecycle of Kubernetes clusters. It offers:
  * Automated cluster lifecycle management, including creation, scaling, upgrading, and deletion.
  * Provides a consistent API across multiple environments, supporting hybrid and multicloud strategies.
  * Eliminates the need for custom scripts and automation, reducing complexity and improving reliability.

![Cluster API in NKP](imagesv3/nkp/lifecycle_mgmt.png)

**Networking and Storage**

  * NKP supports two container network interface (CNI) providers for network connectivity between containers: Cilium and Calico.
  * Container Storage Interface (CSI): Provides standardized, persistent container storage management.

**Security and RBAC**

  * Out-of-the-box SSO support with LDAP, SAML, OIDC, and GitHub.
  * Granular RBAC at workspaces and projects level.

#### Cluster Services

##### Cluster Lifecycle Management

NKP Cluster Lifecycle Management (LCM) reduces operational burden and enhances cluster reliability and efficiency.

  * Easy Cluster Upgrades.
  * Built-in Cluster Autoscaler that scales In/Out clusters based on demand.
  * Self-Healing Cluster Resiliency.

##### Load Balancing and Ingress

**Load Balancing**

  * Built-in load balancer for on-premises installations such as _MetalLB_. 
  * Leverages native cloud provider load balancers when running in the cloud.

**Layer 7 Service Routing (Ingress)**

  * NKP uses _Traefik_ for Layer 7 service routing for HTTP traffic, allowing granular traffic management based on URL paths or headers.  


#### Platform Services

##### Observability

NKP provides full-stack observability by monitoring, tracking, and analyzing your entire Kubernetes infrastructure and application stack using:

**Grafana**

Data visualization solution for metrics and logs with different dashboard options: built-in, custom, and community.

**Prometheus**

A monitoring and alerting toolkit that collects and stores metrics. It is designed for cloud-native environments and provides real-time monitoring and alerting capabilities to ensure operational stability and prompt issue resolution.

**Thanos**

Extension to Prometheus that aggregates its data and provides a highly available metrics platform with long-term storage capabilities.

##### Data Services

**Nutanix Data for Kubernetes (NDK)**

NDK enhances data protection and management capabilities using:

  * Asynchronous Replication for stateful applications without impacting primary environment performance.
  * Comprehensive Application Packaging.
  * Lowering the RTO for efficient business operations.

**Velero**

Velero, an open-source tool included with NKP, provides:

  * Disaster Recovery: Enables quick restoration of applications to a known good state.
  * Data Migration: Version upgrades, Workload relocation, and Environment transitions.
  * Data Protection: Scheduled backups and retention policies.

#### NKP Insights

The NKP Insights Engine collects events and metrics on your Kubernetes clusters to detect potential anomalies of varying criticality.

For more information on the Nutanix Kubernetes Platform, check out the following resources:

* <a href="https://www.nutanix.com/one-platform?search=nkp" target="_blank">Take Nutanix Kubernetes Platform for a Test Drive</a>.
* <a href="https://www.nutanix.com/next/on-demand" target="_blank">Watch the experts talking about platform capabilities at .NEXT 2024</a>.