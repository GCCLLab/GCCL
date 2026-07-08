/**
 * GCCL Interactive Lab Tour — Content Data
 * -----------------------------------------------------------------------
 * SOURCE OF TRUTH: this file is a direct transcription of lab_data.xlsx.
 * To change any lab name, description, video link, or brochure link,
 * edit the values below — nothing else in the site needs to change.
 *
 * Excel column reference:
 *   키워드 (keyword)   -> id
 *   시설명 (facility)  -> name
 *   소개 (intro)        -> description
 *   영상 링크 (video)   -> video (relative path to mp4 file)
 *   관련 홍보물 (docs)  -> materials[]
 * -----------------------------------------------------------------------
 */

const GCCL_DATA = {
  // Landing / Company Overview panel content (Excel row: "open")
  overview: {
    id: "open",
    name: "Company Overview",
    description:
      "GCCL은 신약개발을 위해 1상부터 4상까지 전 주기의 임상시험 검체분석 서비스를 제공합니다.",
    video: "videos/open.mp4",
    materials: [
      { label: "Brochure", url: "https://drive.google.com/file/d/1WTtwwD9ed20vpZk8kkNrbQ2szieu_zEU/view?usp=sharing" },
      { label: "Lab Map", url: "https://drive.google.com/file/d/1C5EP14f8lJq7vIUs50EMtjUEhP2D-UMN/view?usp=sharing" }
    ]
  },

  // The 6 interactive hotspots on the lab map.
  // coords are [x,y] percentage pairs relative to the map image (0-100),
  // converted from the original GCCL.html pixel coordinates (1920x1080 canvas).
  labs: [
    {
      id: "sm",
      name: "Sample Management",
      shortLabel: "Sample Mgmt",
      description:
        "24시간 운영되는 분석실은 대상자로부터 채취된 검체를 고객이 원하는 형태로 제작하여 보관하고 있습니다. IT 시스템을 통해 생성된 바코드를 이용해 검체를 접수하고 전 과정을 관리하며 시료 제작을 위한 전용 검사실 운영합니다.",
      video: "videos/sm.mp4",
      materials: [
        { label: "PBMC Isolation", url: "https://drive.google.com/file/d/1BdV7Z0tkUdbEOrtL2UNnkl6wAcY0IKrE/view?usp=sharing" }
      ],
      shape: "poly",
      coords: [
        [27.45, 75.37], [50.52, 57.31], [54.58, 64.81], [50.52, 68.33],
        [55.68, 77.04], [35.94, 94.35]
      ]
    },
    {
      id: "lk",
      name: "Project Management & Lab Kit Production",
      shortLabel: "Lab Kit / PM",
      description:
        "GCCL은 과제별로 담당 Project Manager을 배정하고 자체 개발한 고객 포탈 및 관리 플랫폼인 G-HUB를 통해 project를 관리하고 있습니다. Lab Kit 제작실에서는 프로젝트 기반의 맞춤형 Lab Kit을 제작하고 관리합니다. 검체분석에 적합한 Lab Kit을 대상자 방문별로 제공하여 효율적이고 정확하게 분석할 수 있습니다.",
      video: "videos/lk.mp4",
      materials: [
        { label: "G-HUB", url: "https://drive.google.com/file/d/1SUxy88A2K8RRDxQkUmnz05j0W9a77Tqs/view?usp=sharing" }
      ],
      shape: "poly",
      coords: [
        [43.28, 17.87], [57.24, 39.44], [69.53, 30.19], [56.35, 9.72]
      ]
    },
    {
      id: "bal",
      name: "Bioanalytical Lab",
      shortLabel: "Bioanalytical Lab",
      description:
        "Bioanalytical Lab은 초기 임상시험에서 PK/PD, ADA, 바이오마커 등의 분석 노하우를 갖추고 있으며 LBA(Ligand Binding Assay), CBA(Cell Based Assay), qPCR, LC/MS-MS, Flow Cytometry 서비스를 제공하고 있습니다. 또한 국내 동종업계 최초로 글로벌 실험실 정보관리 시스템(LIMS)을 도입을 통해 더욱 정확한 Data를 제공하여 글로벌 기준을 충족하고 있습니다.",
      video: "videos/bal.mp4",
      materials: [
        { label: "Bioanalytical Lab Services", url: "https://drive.google.com/file/d/1S33gacmoEZObUCwfd3ziC3THu0J0TOPq/view?usp=sharing" }
      ],
      shape: "poly",
      coords: [
        [50.73, 53.52], [60.89, 71.57], [85.94, 50.09], [74.48, 35.0]
      ]
    },
    {
      id: "bl3",
      name: "Bio-Safety Level 3",
      shortLabel: "BL3 Lab",
      description:
        "300m2 이상의 생물안전시설(Biosafety Level 3 인증 /BL2, BL3)에서는 생(生) 바이러스를 사용하는 중화항체가 분석을 포함하는 감염병 바이러스 기반의 후보물질 검증 및 다양한 연구 서비스를 제공합니다.",
      video: "videos/bl3.mp4",
      materials: [
        { label: "Vaccine Trial Experience", url: "https://drive.google.com/file/d/1GxLvnYK0UJJvouE-5dkhJSeBJMpDiJ7x/view?usp=sharing" }
      ],
      shape: "poly",
      coords: [
        [14.01, 41.02], [30.78, 29.17], [42.03, 51.67], [24.95, 64.54]
      ]
    },
    {
      id: "cl",
      name: "Central Lab",
      shortLabel: "Clinical Lab",
      description:
        "GCCL은 안전성, 유효성 검사의 체계화된 관리 및 자동화 분석을 통해 신뢰성 높은 데이터를 제공합니다.",
      video: "videos/cl.mp4",
      materials: [
        { label: "Central Lab Services", url: "https://drive.google.com/file/d/1MqBuqv149aHmvTxIa1BmT9NifE8AdylW/view?usp=sharing" }
      ],
      shape: "poly",
      coords: [
        [30.57, 25.28], [40.99, 18.7], [54.79, 41.11], [44.06, 49.44]
      ]
    }
  ],

  // Contact CTA (Excel row: "문의")
  contact: {
    heading: "임상시험 및 검체분석 온라인 문의",
    description:
      "임상 및 검체 분석 문의는 아래 견적 문의 버튼을 통해 접수해 주시면, 신속하고 정확한 상담을 도와드리겠습니다.",
    ctaLabel: "Contact GCCL",
    ctaUrl: "https://www.gccl.co.kr/board/board_online/board_form01.asp?scrID=0000000239&pageNum=7&subNum=1&ssubNum=1"
  },

  // Footer / company links (Excel row: "기타")
  links: [
    { label: "Website", url: "https://www.gccl.co.kr/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/global-clinical-central-lab" },
    { label: "YouTube", url: "https://www.youtube.com/@GlobalClinicalCentralLab" },
    { label: "KakaoTalk", url: "https://pf.kakao.com/_mxkhxlG" },
    { label: "Naver Blog", url: "https://blog.naver.com/gclcstudy" }
  ]
};
