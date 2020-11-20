(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{357:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[a._v("#")]),a._v(" Grafana")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"logo-grafana.png"}})]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/grafana/grafana",target:"_blank",rel:"noopener noreferrer"}},[a._v("Grafana"),t("OutboundLink")],1),a._v(" allows you to query, visualize, alert on and understand your metrics no matter where they are stored.")])]),a._v(" "),t("p",[a._v("Grafana will help us visualize our metrics into dashboards. It comes bundled with rich support for many of the most popular time series databases like Graphite, Prometheus, Elasticsearch, OpenTSDB and InfluxDB.\nGrafana supports querying Prometheus. The Grafana data source for Prometheus is included since Grafana 2.5.0 (2015-10-28).")]),a._v(" "),t("p",[a._v("Go to "),t("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[a._v("Grafana"),t("OutboundLink")],1),a._v(" and log in as "),t("code",[a._v("admin")]),a._v(" "),t("code",[a._v("admin")]),a._v(" (confirm your password)")]),a._v(" "),t("h2",{attrs:{id:"data-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-source"}},[a._v("#")]),a._v(" Data Source")]),a._v(" "),t("p",[a._v("This Grafana instance is already configured to use the Prometheus database. You can check it by going to "),t("a",{attrs:{href:"http://localhost:3000/datasources",target:"_blank",rel:"noopener noreferrer"}},[a._v("Configuration/Data Sources"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"prometheus_datasource.png"}})]),a._v(" "),t("h2",{attrs:{id:"default-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-dashboard"}},[a._v("#")]),a._v(" Default Dashboard")]),a._v(" "),t("p",[a._v("Some dashboards are bundled in this workshop. This will help you get used to Grafana and create your own dashboard.")]),a._v(" "),t("h3",{attrs:{id:"global-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-dashboard"}},[a._v("#")]),a._v(" Global Dashboard")]),a._v(" "),t("p",[a._v("Look at the Global dashboard. You should see all the Apache Kafka and Apache ZooKeeper instances listed. It should also show that all the instances are healthy.")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"global_dashboard.png"}})]),a._v(" "),t("h3",{attrs:{id:"jvm-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-dashboard"}},[a._v("#")]),a._v(" JVM Dashboard")]),a._v(" "),t("p",[a._v("Next, look at the dashboard "),t("code",[a._v("Kafka Broker / JVM Memory")]),a._v(".")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"broker_jvm.png"}})]),a._v(" "),t("p",[a._v("This dashboard has a row per instance. It shows the JVM's used heap memory and the time spend in GC per generation for each instance.")]),a._v(" "),t("h2",{attrs:{id:"create-your-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-your-dashboard"}},[a._v("#")]),a._v(" Create your dashboard")]),a._v(" "),t("p",[a._v("Create a new dashboard. On the top left, click on the floppy disk icon to save and name your dashboard as "),t("code",[a._v("Kafka Dashboard")]),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"instance-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instance-variable"}},[a._v("#")]),a._v(" Instance Variable")]),a._v(" "),t("p",[a._v("Next, click on the gearwheel at the top left. You are going to create a new variable to filter your dashboard per instance. Click "),t("code",[a._v("Variables")]),a._v(" and "),t("code",[a._v("add variable")]),a._v(".")]),a._v(" "),t("p",[a._v("Name your variable "),t("code",[a._v("instance")]),a._v(", choose the Prometheus data source and set the regex as "),t("code",[a._v("label_values(instance)")])]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"instance_variable.png"}})]),a._v(" "),t("p",[a._v("You should see the instances in the section "),t("code",[a._v("Preview of values")]),a._v(".")]),a._v(" "),t("p",[a._v("Finally, press "),t("code",[a._v("Save Dashboard")])]),a._v(" "),t("h3",{attrs:{id:"active-controller-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#active-controller-panel"}},[a._v("#")]),a._v(" Active Controller Panel")]),a._v(" "),t("p",[a._v("Click on ̀ Add a new panel`, You are going to create a new panel to display which Apache Kafka instance is the controller.")]),a._v(" "),t("p",[a._v("On the left, in the "),t("code",[a._v("Settings")]),a._v(" section, set the title to "),t("code",[a._v("Active Controller")]),a._v(" and choose Table Visualization.")]),a._v(" "),t("p",[a._v("In the "),t("code",[a._v("Query")]),a._v(" section, set the metrics as "),t("code",[a._v("kafka_controller_kafkacontroller_activecontrollercount")]),a._v(". You should see all the data for this metric.")]),a._v(" "),t("p",[a._v("As you can see, the metric is updated every 15 seconds. This interval is configured in the "),t("code",[a._v("prometheus.yml")]),a._v(" file.")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("global")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("scrape_interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("     15s\n")])])]),t("p",[a._v("For this panel, you only need the last value, so you can toggle the "),t("code",[a._v("Instant")]),a._v(" button in the "),t("code",[a._v("Legend")]),a._v(" section.")]),a._v(" "),t("blockquote",[t("p",[a._v("An Instant Query returns the last value for each time series which shows a good summary of the data shown in the graph.\n"),t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/explore/#prometheus-specific-features",target:"_blank",rel:"noopener noreferrer"}},[a._v("Grafana Documentation"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("Finally, click on the "),t("code",[a._v("Transform")]),a._v(" tab, select "),t("code",[a._v("Organize fields")]),a._v(" to hide useless columns like "),t("code",[a._v("job")]),a._v(", "),t("code",[a._v("time")]),a._v(" and "),t("code",[a._v("__name__")]),a._v(".\nYour table should look like this:")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"active_controller_panel.png"}})]),a._v(" "),t("p",[a._v("Don't forget to click on the "),t("code",[a._v("Save")]),a._v(" button.")]),a._v(" "),t("p",[a._v("// TODO : Ajouter des panels")])])}),[],!1,null,null,null);e.default=s.exports}}]);