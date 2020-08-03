import RahuVideo from "./sd_video/rahul.mp4";
import RajuVideo from "./sd_video/raju.mp4";

export default [
  {
    "Name": "Rahul",
    "Employee ID": "1022",
    "Visitor ID": "Null",
    "Cluster/Location": "Cam1",
    "Voilation Score": "5",
    "Voilation Density": "0.5",
    "video": RahuVideo,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.3, 0.2, 0.56, 0.13, 0.22, 0.4
          ],
          label: "Rahul",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Raju",
    "Employee ID": "1024",
    "Visitor ID": "Null",
    "Cluster/Location": "Cam2",
    "Voilation Score": "4",
    "Voilation Density": "0.4",
    "video": RajuVideo,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.15, 0.2, 0.11, 0.13, 0.11, 0.2
          ],
          label: "Raju",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Reshma",
    "Employee ID": "1025",
    "Visitor ID": "Null",
    "Cluster/Location": "Cam3",
    "Voilation Score": "6",
    "Voilation Density": "0.6",
    "video": null,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.33, 0.25, 0, 0.1, 0.16, 
          ],
          label: "Reshma",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Ramiz",
    "Employee ID": "1026",
    "Visitor ID": "Null",
    "Cluster/Location": "Cam4",
    "Voilation Score": "4",
    "Voilation Density": "0.4",
    "video": null,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.2, 0.2, 0.22, 0.25, 0.22, 0.1
          ],
          label: "Ramiz",
          borderColor: '#005bff',
        }
      ]
    }
  },
  {
    "Name": "Ali",
    "Employee ID": "1027",
    "Visitor ID": "Null",
    "Cluster/Location": "Cam5",
    "Voilation Score": "2",
    "Voilation Density": "0.2",
    "video": null,
    "graph": {
      labels: [
        '12-07-20',
        '14-07-20',
        '15-07-20',
        '16-07-20',
        '24-07-20'
      ],
      datasets: [
        {
          data: [
            0.29,
            0.13,
            0.43,
            0.45,
            0.5
          ],
          label: "Ali",
          borderColor: '#005bff',
        }
      ]
    }
  }
]
