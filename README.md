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