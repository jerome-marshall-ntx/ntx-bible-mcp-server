import { FastMCP } from "fastmcp"
import { readFile } from "fs/promises"
import { join, resolve } from "path"

const server = new FastMCP({
  name: "Nutanix Bible MCP",
  version: "1.0.0",
})

const dataDir = resolve("./data")

// Tool definitions array
const toolDefinitions = [
  // About and general documentation
  {
    filename: "0-about.md",
    name: "get_nutanix_bible_about",
    description:
      "Get information about the Nutanix Bible documentation, its purpose, creation story, and background",
  },
  {
    filename: "0-a-brief-lesson-in-history.md",
    name: "get_nutanix_company_history",
    description:
      "Get comprehensive history of Nutanix company, founders, key milestones, and evolution of hyperconverged infrastructure",
  },
  {
    filename: "index.md",
    name: "get_nutanix_bible_index",
    description:
      "Get the main index page and complete table of contents for the Nutanix Bible documentation",
  },
  {
    filename: "classic.md",
    name: "get_nutanix_bible_classic_edition",
    description:
      "Get the classic single-page edition of the complete Nutanix Bible documentation",
  },
  {
    filename: "release_notes.md",
    name: "get_nutanix_bible_release_notes",
    description:
      "Get release notes, change log, and update history for Nutanix Bible documentation",
  },

  // Core platform fundamentals
  {
    filename: "2-basics.md",
    name: "get_nutanix_platform_basics",
    description:
      "Get fundamental concepts about Nutanix web-scale architecture, hyperconverged infrastructure basics, and platform overview",
  },
  {
    filename: "2a-basics-where-we-started.md",
    name: "get_nutanix_origins_history",
    description:
      "Get information about the origins of Nutanix, hyperconverged infrastructure market evolution, and industry background",
  },
  {
    filename: "2b-basics-products-and-platforms.md",
    name: "get_nutanix_products_portfolio",
    description:
      "Get comprehensive overview of Nutanix products, platforms, and solution portfolio",
  },
  {
    filename: "2c-book-of-basics-hyperconverged-platform.md",
    name: "get_nutanix_hyperconverged_concepts",
    description:
      "Get detailed explanation of Nutanix hyperconverged infrastructure concepts, architecture principles, and benefits",
  },
  {
    filename: "2d-book-of-basics-distributed-system.md",
    name: "get_nutanix_distributed_systems",
    description:
      "Get information about Nutanix distributed systems architecture, principles, and implementation details",
  },
  {
    filename: "2e-book-of-basics-software-defined.md",
    name: "get_nutanix_software_defined_concepts",
    description:
      "Get concepts about Nutanix software-defined infrastructure, benefits, and implementation approach",
  },
  {
    filename: "2f-book-of-basics-cluster-components.md",
    name: "get_nutanix_cluster_components",
    description:
      "Get detailed information about Nutanix cluster components, architecture, and hardware infrastructure",
  },
  {
    filename: "2g-book-of-basics-nondistruptive-upgrades.md",
    name: "get_nutanix_nondisruptive_upgrades",
    description:
      "Get information about Nutanix non-disruptive upgrade capabilities, processes, and benefits",
  },
  {
    filename: "2h-book-of-basics-foundation-imaging.md",
    name: "get_nutanix_foundation_imaging",
    description:
      "Get details about Nutanix Foundation imaging tool, deployment process, and cluster setup procedures",
  },
  {
    filename: "2i-book-of-basics-drive-breakdown.md",
    name: "get_nutanix_storage_drives",
    description:
      "Get technical details about Nutanix storage drive configurations, types, and hardware breakdowns",
  },

  // Management platform - Prism
  {
    filename: "3-book-of-prism.md",
    name: "get_nutanix_prism_overview",
    description:
      "Get overview of Nutanix Prism management interface, control plane, and administrative capabilities",
  },
  {
    filename: "3a-book-of-prism-architecture.md",
    name: "get_nutanix_prism_architecture",
    description:
      "Get detailed architecture information about Nutanix Prism management platform, components, and design",
  },
  {
    filename: "3b-book-of-prism-navigation.md",
    name: "get_nutanix_prism_navigation",
    description:
      "Get guidance on navigating and using the Nutanix Prism interface and user experience",
  },
  {
    filename: "3c-book-of-prism-features-and-usage.md",
    name: "get_nutanix_prism_features",
    description:
      "Get comprehensive features and usage information for Nutanix Prism management platform",
  },
  {
    filename: "3d-book-of-prism-microservices-infrastructure.md",
    name: "get_nutanix_prism_microservices",
    description:
      "Get information about Nutanix Prism microservices infrastructure and architecture",
  },
  {
    filename: "3e-book-of-prism-pc-backup.md",
    name: "get_nutanix_prism_central_backup",
    description:
      "Get details about Nutanix Prism Central backup and restore capabilities, procedures, and best practices",
  },

  // Operating system - AOS
  {
    filename: "4-book-of-aos.md",
    name: "get_nutanix_aos_overview",
    description:
      "Get overview of Nutanix Acropolis Operating System (AOS) data plane and core functionality",
  },
  {
    filename: "4a-book-of-aos-architecture.md",
    name: "get_nutanix_aos_architecture",
    description:
      "Get detailed Nutanix AOS architecture, system design, and technical implementation",
  },
  {
    filename: "4b-book-of-aos-security.md",
    name: "get_nutanix_aos_security",
    description:
      "Get comprehensive Nutanix AOS security features, implementations, and best practices",
  },
  {
    filename: "4c-book-of-aos-storage.md",
    name: "get_nutanix_aos_storage_dsf",
    description:
      "Get detailed information about Nutanix AOS storage services and Distributed Storage Fabric (DSF)",
  },
  {
    filename: "4d-book-of-aos-services.md",
    name: "get_nutanix_aos_services",
    description:
      "Get information about various Nutanix AOS services, capabilities, and functionality",
  },
  {
    filename: "4e-book-of-aos-backup-dr.md",
    name: "get_nutanix_aos_backup_dr",
    description:
      "Get details about Nutanix AOS backup and disaster recovery features, capabilities, and procedures",
  },
  {
    filename: "4f-book-of-aos-administration.md",
    name: "get_nutanix_aos_administration",
    description:
      "Get comprehensive Nutanix AOS administration and management guidance",
  },

  // Hypervisors
  {
    filename: "5-book-of-ahv.md",
    name: "get_nutanix_ahv_overview",
    description:
      "Get overview of Nutanix Acropolis Hypervisor (AHV) native virtualization platform",
  },
  {
    filename: "5a-book-of-ahv-architecture.md",
    name: "get_nutanix_ahv_architecture",
    description:
      "Get detailed Nutanix AHV architecture, design, and technical specifications",
  },
  {
    filename: "5b-book-of-ahv-how-it-works.md",
    name: "get_nutanix_ahv_technical_details",
    description:
      "Get technical details on how Nutanix AHV hypervisor works and operates",
  },
  {
    filename: "5c-book-of-ahv-administration.md",
    name: "get_nutanix_ahv_administration",
    description: "Get Nutanix AHV administration and management best practices",
  },

  {
    filename: "6-book-of-vsphere.md",
    name: "get_nutanix_vmware_vsphere_overview",
    description:
      "Get overview of Nutanix integration with VMware vSphere hypervisor",
  },
  {
    filename: "6a-book-of-vsphere-architecture.md",
    name: "get_nutanix_vmware_vsphere_architecture",
    description:
      "Get architecture details for Nutanix running on VMware vSphere platform",
  },
  {
    filename: "6b-book-of-vsphere-how-it-works.md",
    name: "get_nutanix_vmware_vsphere_technical",
    description:
      "Get technical details on how Nutanix works with VMware vSphere",
  },
  {
    filename: "6c-book-of-vsphere-administration.md",
    name: "get_nutanix_vmware_vsphere_admin",
    description:
      "Get administration guidance for Nutanix with VMware vSphere integration",
  },

  {
    filename: "7-book-of-hyper-v.md",
    name: "get_nutanix_microsoft_hyperv_overview",
    description:
      "Get overview of Nutanix integration with Microsoft Hyper-V hypervisor",
  },
  {
    filename: "7a-book-of-hyperv-architecture.md",
    name: "get_nutanix_microsoft_hyperv_architecture",
    description:
      "Get architecture details for Nutanix running on Microsoft Hyper-V platform",
  },
  {
    filename: "7b-book-of-hyperv-how-it-works.md",
    name: "get_nutanix_microsoft_hyperv_technical",
    description:
      "Get technical details on how Nutanix works with Microsoft Hyper-V",
  },
  {
    filename: "7c-book-of-hyperv-administration.md",
    name: "get_nutanix_microsoft_hyperv_admin",
    description:
      "Get administration guidance for Nutanix with Microsoft Hyper-V integration",
  },

  // Cloud clusters
  {
    filename: "10-book-of-nutanix-clusters.md",
    name: "get_nutanix_cloud_clusters_overview",
    description:
      "Get overview of Nutanix Cloud Clusters (NC2) for public cloud deployment and management",
  },
  {
    filename: "10a-book-of-nutanix-clusters-aws.md",
    name: "get_nutanix_cloud_clusters_aws",
    description:
      "Get comprehensive details about Nutanix Cloud Clusters (NC2) on Amazon Web Services (AWS)",
  },
  {
    filename: "10b-book-of-nutanix-clusters-azure.md",
    name: "get_nutanix_cloud_clusters_azure",
    description:
      "Get comprehensive details about Nutanix Cloud Clusters (NC2) on Microsoft Azure",
  },

  // Storage services
  {
    filename: "11-book-of-storage-services.md",
    name: "get_nutanix_storage_services_overview",
    description:
      "Get overview of Nutanix storage services portfolio and data services",
  },
  {
    filename: "11a-book-of-storage-services-volumes.md",
    name: "get_nutanix_volumes_block_storage",
    description:
      "Get details about Nutanix Volumes block storage service and capabilities",
  },
  {
    filename: "11b-book-of-storage-services-files.md",
    name: "get_nutanix_files_storage_service",
    description:
      "Get details about Nutanix Files file storage service and NAS capabilities",
  },
  {
    filename: "11c-book-of-storage-services-objects.md",
    name: "get_nutanix_objects_storage_service",
    description:
      "Get details about Nutanix Objects object storage service and S3-compatible capabilities",
  },

  // Network services
  {
    filename: "12-book-of-network-services.md",
    name: "get_nutanix_network_services_overview",
    description:
      "Get overview of Nutanix network services, security, and networking solutions",
  },
  {
    filename: "12a-book-of-network-services-flow-network-security.md",
    name: "get_nutanix_flow_network_security",
    description:
      "Get details about Nutanix Flow Network Security micro-segmentation and security policies",
  },
  {
    filename: "12b-book-of-network-services-security-central.md",
    name: "get_nutanix_security_central",
    description:
      "Get information about Nutanix Security Central governance, compliance, and security management",
  },
  {
    filename: "12c-book-of-network-services-flow-virtual-networking.md",
    name: "get_nutanix_flow_virtual_networking",
    description:
      "Get details about Nutanix Flow Virtual Networking SDN capabilities and software-defined networking",
  },

  // Backup and DR services
  {
    filename: "13-book-of-backup-dr-services.md",
    name: "get_nutanix_backup_dr_services_overview",
    description:
      "Get overview of Nutanix backup and disaster recovery services and solutions",
  },
  {
    filename: "13a-book-of-dr-services-leap.md",
    name: "get_nutanix_leap_disaster_recovery",
    description:
      "Get details about Nutanix Leap disaster recovery and business continuity service",
  },
  {
    filename: "13b-book-of-dr-services-mine.md",
    name: "get_nutanix_mine_backup_service",
    description:
      "Get information about Nutanix Mine backup and data protection service",
  },

  // Cloud management
  {
    filename: "14-book-of-cloud-management.md",
    name: "get_nutanix_cloud_management_overview",
    description:
      "Get overview of Nutanix cloud management capabilities and multi-cloud operations",
  },
  {
    filename: "14a-book-of-cloud-management-aiops.md",
    name: "get_nutanix_aiops_cloud_management",
    description:
      "Get details about Nutanix AIOps and intelligent cloud management capabilities",
  },
  {
    filename: "14b-book-of-cloud-management-cost-governance.md",
    name: "get_nutanix_cloud_cost_governance",
    description:
      "Get information about Nutanix cloud cost governance and optimization solutions",
  },
  {
    filename: "14c-book-of-cloud-management-self-service.md",
    name: "get_nutanix_self_service_cloud",
    description:
      "Get details about Nutanix self-service cloud management capabilities",
  },

  // Governance services
  {
    filename: "15-book-of-governance-services.md",
    name: "get_nutanix_governance_services_overview",
    description:
      "Get overview of Nutanix governance services and enterprise compliance solutions",
  },
  {
    filename: "15a-book-of-governance-services-beam.md",
    name: "get_nutanix_beam_cost_governance",
    description:
      "Get information about Nutanix Beam cost governance and cloud optimization service",
  },

  // Cloud native services
  {
    filename: "18-book-of-cloud-native-services.md",
    name: "get_nutanix_cloud_native_overview",
    description:
      "Get overview of Nutanix cloud native services and Kubernetes platform solutions",
  },
  {
    filename:
      "18a-book-of-cloud-native-services-nutanix-kubernetes-platform.md",
    name: "get_nutanix_kubernetes_platform",
    description:
      "Get details about Nutanix Kubernetes Platform (NKP) and container orchestration",
  },
  {
    filename:
      "18b-book-of-cloud-native-services-partner-kubernetes-distributions.md",
    name: "get_nutanix_partner_kubernetes",
    description:
      "Get information about Nutanix partner Kubernetes distributions and integrations",
  },
  {
    filename: "18c-book-of-cloud-native-services-nutanix-kubernetes-engine.md",
    name: "get_nutanix_kubernetes_engine_legacy",
    description:
      "Get details about Nutanix Kubernetes Engine (NKE) legacy platform",
  },

  // APIs and automation
  {
    filename: "19-book-of-apis.md",
    name: "get_nutanix_apis_automation_overview",
    description:
      "Get overview of Nutanix APIs, automation interfaces, and programmability options",
  },
  {
    filename: "19a-rest-apis.md",
    name: "get_nutanix_rest_apis",
    description:
      "Get comprehensive information about Nutanix REST APIs and integration capabilities",
  },
  {
    filename: "19b-cli.md",
    name: "get_nutanix_cli_interfaces",
    description:
      "Get details about Nutanix CLI interfaces, command-line tools, and terminal operations",
  },
  {
    filename: "19c-powershell.md",
    name: "get_nutanix_powershell_automation",
    description:
      "Get information about Nutanix PowerShell modules and scripting automation",
  },

  // AI and ML
  {
    filename: "20-book-of-ai-ml.md",
    name: "get_nutanix_ai_ml_overview",
    description:
      "Get overview of Nutanix AI and machine learning platform capabilities and solutions",
  },
  {
    filename: "20a-nutanix-enterprise-ai.md",
    name: "get_nutanix_enterprise_ai_platform",
    description:
      "Get details about Nutanix Enterprise AI platform, solutions, and artificial intelligence capabilities",
  },

  // Migration services
  {
    filename: "21-book-of-move.md",
    name: "get_nutanix_move_migration_overview",
    description:
      "Get overview of Nutanix Move migration services and data mobility solutions",
  },
  {
    filename: "21a-vm-migration.md",
    name: "get_nutanix_move_vm_migration",
    description:
      "Get details about virtual machine migration with Nutanix Move service",
  },
  {
    filename: "21b-vm-migration-arch.md",
    name: "get_nutanix_move_vm_architecture",
    description:
      "Get architecture details for Nutanix Move virtual machine migration processes",
  },
  {
    filename: "21c-files-migration.md",
    name: "get_nutanix_move_files_migration",
    description:
      "Get information about file migration capabilities with Nutanix Move",
  },

  // Database services
  {
    filename: "22-book-of-ndb.md",
    name: "get_nutanix_database_service_overview",
    description:
      "Get overview of Nutanix Database Service (NDB) and database-as-a-service capabilities",
  },
  {
    filename: "22a-ndb-arch.md",
    name: "get_nutanix_database_service_architecture",
    description:
      "Get detailed architecture information for Nutanix Database Service (NDB) platform",
  },
  {
    filename: "22b-ndb-configuration.md",
    name: "get_nutanix_database_service_config",
    description:
      "Get configuration and deployment guidance for Nutanix Database Service (NDB)",
  },
]

// Create tools from the definitions array
toolDefinitions.forEach(({ filename, name, description }) => {
  server.addTool({
    name,
    description,
    execute: async () => {
      try {
        const file = await readFile(join(dataDir, filename), "utf8")
        return {
          content: [{ type: "text", text: file }],
        }
      } catch (error) {
        return {
          content: [{ type: "text", text: `Error reading file: ${error}` }],
        }
      }
    },
  })
})

// Start the server with HTTP streaming
server.start({
  transportType: "httpStream",
  httpStream: {
    port: 3000,
  },
})
