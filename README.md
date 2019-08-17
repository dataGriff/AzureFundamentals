# AzureFundamentals
Azure fundamentals exam repo including azure in month of lunches

# Links

* [Azure in a Month of Lunches](https://azure.microsoft.com/mediahandler/files/resourcefiles/learn-azure-in-a-month-of-lunches/Learn_Azure_in_a_Month_of_Lunches.pdf?fbclid=IwAR2uHzSGMSdq0Uvg61KvBYXtFf1O-NdI4lVKisjRQvDlW2UGYyVb5ZqqNFw)
* [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest)
```ps
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet
```
* [Azure Powershell](https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-2.5.0)
```ps
Install-Module -Name Az -AllowClobber -Scope CurrentUser
```
## Azure CLI

Create and view SSH
```
ssh-keygen
cat .ssh/id_rsa.pub
```

Get version
```
az --version
```

Open VM Port
```
az vm open-port -g namerg -n vmname --port 80
```

## Git

You can use a direct local repo in a web app!

how to set your username and email
```
git config --global user.name "griff"
git config --global user.email "griff@thing.com"
```

## Linux Command

Install LAMP web stack
(&& means will only run if previous bit run succesfully and ^ tells it to install all relevant packages)
```
sudo apt-get update && sudo apt install -y lamp-server^
```

# Key Terms

| Term   |      Description      |  Abbreviation |
|----------|:-------------:|------:|
| Secure Shell | This is a protocol to communicate with remote computer using 2 key pair, you have the private key and the public key is stored on the remote machine  | SSH  |
| Expressroute |  Dedicated connection to Azure from on-prem      |   |
| Network Security Group | Basicaly firewall rules in Azure | NSG |
| Network Interface Cards| Connect VM to a subnet | NIC |
| Advanced Packing tool | How you install packages on Unbuntu | APT |
| Deployment Slots | Staged approach to releasing a web app before releasing all to prod, allows for instant slot swaping |  |
| App Service Environments | Isolated area to run multiple well apps in | ASE |

