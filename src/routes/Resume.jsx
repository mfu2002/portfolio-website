import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import Timeline, { TimelineItem } from "../components/Timeline/Timeline";
export default function Resume() {
  return (
    <>
      <Timeline sectionTitle="Work" Icon={WorkIcon}>
        <TimelineItem
          title="Web Crawling Analyst"
          subtitle="Jora"
          period="Sep 2022- Present"
        >
          {[
            "Maintain and repair crawlers to ensure consistent quantity and quality of jobs",
            "Monitor the quality of jobs on live websites and make adjustments to crawler configurations.",
            "Develop scripts (Ruby) to improve efficiency",
            "Recommend technology improvements and operationalise changes",
            "Develop analytics tools and build dashboards.",
          ]}
        </TimelineItem>
        <TimelineItem
          title="Robotic Engineering Intern"
          subtitle="Universal Biosensors"
          period="Feb 2023 - Jun 2023"
        >
          {[
            "Analysed, diagnosed, and implemented effective solutions to complex engineering problems, demonstrating proficiency in assessing assembly lines and prototyping innovative solutions.",
            "Collaborated closely with cross-functional teams to construct comprehensive project plans, including setting deadlines and determining the necessary personnel and resources.",
            "Led a high-impact project involving the migration of AVEVA Historian to a new server and successfully integrated a new fabrication machine using OPC technology.",
            "Conducted an in-depth review of STM32 powered device's documentation, thoroughly comprehending their software layout, and skillfully executing firmware updates.",
          ]}
        </TimelineItem>
        <TimelineItem
          title="Retail Consultant"
          subtitle="Telstra"
          period="Dec 2021 - Oct 2022"
        ></TimelineItem>
        <TimelineItem
          title="IT Help desk support"
          subtitle="Hampton Park Secondary College"
          period="Feb 2021 - Dec 2021"
        ></TimelineItem>
        <TimelineItem
          title="SRC President"
          subtitle="Hampton Park Secondary College"
          period="Jan 2020 - Dec 2020"
        ></TimelineItem>
        <TimelineItem
          title="TechTeam Leader"
          subtitle="Hampton Park Secondary College"
          period="Jan 2020 - Dec 2020"
        ></TimelineItem>
        <TimelineItem
          title="Technology Domain Leader"
          subtitle="Hampton Park Secondary College"
          period="Jan 2019 - Dec 2020"
        ></TimelineItem>
      </Timeline>
      <Timeline sectionTitle="Education" Icon={SchoolIcon}>
        <TimelineItem
          subtitle="Swinburne University of Technology"
          title="Bachelors of Robotic and Mechatronic Engineering (Hons) / Computer Science IoT"
          period="2021-2025"
        >
          {[
            "Completing an honours degree in Robotic and Mechatronics Engineering, and IoT Computer Science.",
          ]}
        </TimelineItem>
        <TimelineItem
          title="Year 12 Graduation"
          subtitle="Hampton Park Secondary College"
          period="2016-2020"
        >
          {[
            "Graduated from high school with an ATAR of 98.0",
            "I achieved the position of Dux in 2020, showcasing my academic excellence and leadership in high school",
            "Achieved a raw study score of 50 for Software Development, topping in the entire state. My efforts were " +
              'recognised by the local parliament memeber, <a href="https://www.facebook.com/2005862956345687/photos/br.AboDZ38N44bFs0--VZsuHwVDALyqqCDQj81liKnhxRPzo-PCMIkak7Qa0u0HUDAMr2WMtcTzrOhqEnnfxwmLZyrDz1_sZw_XRjNehkj5Askk2m6F9o73Yw3Ox5bkvIOXWTQ/2539976886267622/?type=1&locale=hi_IN&paipv=0&eav=AfaK-ojoyhkD1eb1TP6ptCVcF9X1LJKNTvnhfurmsp7gJZAzq2W-xEeck68p2yOF-1A&_rdr">Gary Maas</a>; ' +
              '<a href="https://cranbournenews.starcommunity.com.au/vceaward_208220_01-png-3/"> Cranbourne Star News</a>; ' +
              'and, <a href="https://www.theage.com.au/national/victoria/vce-2019-student-honour-roll-20191212-p53jf6.html">The Age Newspaper</a>.',
          ]}
        </TimelineItem>
      </Timeline>
    </>
  );
}
