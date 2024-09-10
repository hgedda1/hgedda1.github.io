# Building a SIEM Solution with ELK Stack

## 1. Project Overview

**Objective:**

The objective of this project is to set up a Security Information and Event Management (SIEM) system using the ELK Stack to monitor and analyze security events in a simulated environment. This solution provides real-time visibility into security incidents by centralizing log data and detecting suspicious activities.

**Tools Used:**

- **ELK Stack**: Elasticsearch, Logstash, Kibana
- **Filebeat**: For log shipping
- **OSSEC**: For host-based intrusion detection

## 2. Project Scope

The project involves the following key steps:

1. Set up the ELK Stack for centralized log collection.
2. Collect and normalize logs from multiple sources.
3. Correlate security events and detect anomalies.
4. Integrate OSSEC for host-based intrusion detection.
5. Create dashboards and generate reports for real-time monitoring and analysis.

## 3. Project Implementation

### 3.1: Set Up the ELK Stack

#### 3.1.1 Installing ELK Stack

Elasticsearch, Logstash, and Kibana were installed on a virtual machine to serve as the core of the SIEM solution. Elasticsearch stored the collected log data, Logstash handled log ingestion, and Kibana provided the interface for data visualization.

#### 3.1.2 Logstash Configuration

Logstash was configured to collect logs from various sources, including system logs and application logs. Multiple input plugins were used to ingest logs from different sources.

#### 3.1.3 Filebeat Log Shipping

Filebeat was installed on multiple servers to ship logs to Logstash. Filebeat collected logs from sources like Apache, syslog, and Windows Event Logs.

### 3.2: Log Collection and Normalization

#### 3.2.1 Filebeat and Logstash Configuration

Filebeat and Logstash were configured to collect logs from Windows Event Logs, Apache server logs, and syslogs from Linux systems. Logstash used filters to parse and normalize the data into structured formats.

#### 3.2.2 Parsing and Structuring Logs

Custom parsing rules were written in Logstash to structure and format logs for easier analysis. This allowed for consistency across logs from different sources, making it easier to detect anomalies.

### 3.3: Security Event Correlation

#### 3.3.1 Custom Correlation Rules

Custom correlation rules were created in Logstash to detect suspicious activities such as repeated failed login attempts, privilege escalation, and port scanning.

#### 3.3.2 Visualizations in Kibana

Visualizations were created in Kibana to display detected security events, trends, and patterns. Dashboards were built to give a real-time overview of security activity and to monitor critical events.

### 3.4: Intrusion Detection Integration

#### 3.4.1 OSSEC Integration

OSSEC was integrated with the ELK Stack for host-based intrusion detection. OSSEC was configured to monitor file integrity, detect suspicious processes, and generate alerts for security-related events.

#### 3.4.2 Forwarding OSSEC Alerts to Logstash

OSSEC alerts were forwarded to Logstash for centralized analysis and correlation with other events. This enabled real-time detection of potential intrusions across the environment.

### 3.5: Dashboards and Reporting

#### 3.5.1 Kibana Dashboards

Dashboards were created in Kibana to provide real-time visualization of security events, system health, and potential threats. These dashboards displayed key metrics such as failed logins, suspicious network traffic, and intrusion alerts.

#### 3.5.2 Automated Reporting

Automated reports were set up to provide daily and weekly summaries of security incidents. These reports included charts and data visualizations to help security teams quickly understand trends and respond to incidents.

## 4. Challenges and Solutions

**Challenge 1:** Handling the volume and diversity of log data from different systems.  
**Solution 1:** Implemented custom parsing and filtering rules in Logstash to normalize and structure logs, ensuring consistent data format across various sources.

**Challenge 2:** Detecting subtle anomalies and potential security incidents.  
**Solution 2:** Created custom correlation rules in Logstash to detect unusual activity patterns and visualized them in Kibana for quicker response.

## 5. Outcome

Successfully set up and managed a comprehensive SIEM solution using the ELK Stack.  
- Log collection, normalization, and event correlation were achieved using open-source tools.  
- OSSEC provided host-based intrusion detection.  
- Kibana dashboards and automated reporting gave real-time visibility into security incidents and helped in detecting potential threats early.

## 6. Future Improvements

**Machine Learning:** Add machine learning capabilities to the ELK Stack for advanced anomaly detection.  
**Expand Data Sources:** Integrate additional data sources to expand the visibility of the SIEM system.

## 7. Conclusion

This project successfully implemented a Security Information and Event Management (SIEM) solution using the ELK Stack. The project demonstrated expertise in log collection, event correlation, and intrusion detection, resulting in a robust system for monitoring and responding to security events in real time.
