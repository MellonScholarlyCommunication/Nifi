# Nifi

This is a demonstrator for the Mellon project which contains:

- A LDN sender, receiver and sender
- A small LDP server
- An Orchestrator component

# Requirements

- [Apache Nifi](https://nifi.apache.org)
   - We require Nifi 1.13.2 and Nifi Registry

For this project we need two subprojects:

- [POrchestrator](https://github.com/MellonScholarlyCommunication/POrchestrator) - An orchestrator component in N3 + Prolog
- [POrchestratorHelpers](https://github.com/MellonScholarlyCommunication/POrchestratorHelpers) - Command line tools and Nifi processors

# Install

- Install the Nifi server
- Start the server `cd nifi-VERSION && bin/nifi.sh start`
- Start the registry `cd nifi-registry-VERSION && bin/nifi-registry.sh start

## Registry

- Open a browser to the registry http://localhost:18080/nifi-registry
- In settings (top right tool icon)
   -  Create a new bucket (e.g. `Demo`)
- In main window 
   - `Import New Flow`
   - Set Flow Name (e.g. `Nifi Flow`)
   - Select bucket (e.g. `Demo`)
   - Upload the `Nifi_Flow.json` 

## Nifi

- Open a browser to the main nifi http://localhost:8080/nifi
- Choose the bread menu (top right)
   - Choose `Controller Settings`
   - Choose tab `Registry Clients`
       - Add a new client
       - Name (e.g. `Local registry`)
       - URL http://localhost:18080/nifi-registry
       - Click `ADD`
- Wait 10-20 seconds for Nifi to connect to the registry
- Drag a new Process Group (4th top icon in the menu bar) to the main screen
   - In *Add Process Group* choose `Import...`
   - Select version 1 of the `Mellon Demonstrator` Flow Name
   - Choose `Import`
- A NifiFlow box should appear in the main work screen
- Start the Controller Services
   - Right click on the Progress Group box
   - Choose `Configure`
   - Choose tab `Controller Services`
   - Click the small lightning icons (alt = `enable`) for both services
   - Close the configuration window
- Set the location of the POrchestratorHelpers directory
   - Right click on the Process Group box
   - Choose `Variables`
   - Edit the `project.dir` variable to the `POrchestratorHelpers` folder
   - Apply the changes
- Start the Nifi Flow
   - Right click on the Process Group box
   - Choose `Start`