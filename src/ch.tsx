import ihsImage from '../public/IHS_Icon.webp'
import aiRepublicImage from '../public/aiRepublic.jpeg'
import h4iImage from '../public/h4i.png'
import honeyPig from '../public/honeyPig.jpg'
import guitarImage from '../public/guitar.jpeg'
import cache from '../public/cache.jpg'
import tam1 from '../public/tam1.jpg'
import tam2 from '../public/tam2.jpg'
import polyphia from '../public/polyphia.jpg'
import hiking from '../public/hiking.jpg'
import concert from '../public/concert.jpg'
import caliFirstMeal from '../public/caliFirstMeal.jpg'
import picnic from '../public/picnic.jpg'
import beach from '../public/beach.jpg'
import technica from '../public/technica_icon.png'
import terpmenu from '../public/terpmenu.jpg'
import split from '../public/split.png'
import shellmates from '../public/shellmates.png'

export const banner = {
  title: "你好，我是Evan",
  description1: "20岁的全栈软件工程师，就读于马里兰大学，准备创造影响力。",
  description2: "查看我的经历和项目！"
}

export const experience = {
    ihs: {
    title: "软件工程实习生 @ IHS",
    image: ihsImage,
    date: "2025年5月 - 至今",
    tools: ["Vue", "Node", "GCP", "Firebase", "SQL", "Git"],
    content: {
        text: ["作为The Institute for Humane Studies的软件工程实习生，我有机会参与开发ScholarsEdge平台，它彻底改变了教授、学者和研究人员之间的互动方式。通过集成AI工具，例如用于论文和法规搜索的内容倍增器，研究、资金和社区建设对学者们来说变得前所未有的便捷。", "在使用Vue.js作为前端框架的冲刺开发中，我编写了3000+行生产代码，并将其与Firebase后端和Salesforce数据库通过Node.js连接。我还使用GCP工具实现了多项功能，例如GCP Bucket的头像系统。", "我还与ScholarsEdge团队的其他工程师一起参加每周站会，并参与了GitHub的PR和代码审查。"],
        images: [""]
      }
  },
  technica: {
    title: "技术负责人 @ Technica",
    image: technica, 
    date: "2025年6月 - 至今",
    tools: ["React", "Node", "Firebase", "TypeScript"],
    content: {
        text: [
          "作为Technica Fellowship Program的技术负责人，我有机会教授并指导15名高中生，参与为期8周的Web开发训练营，重点学习React、Node.js、Firebase和TypeScript。",
          "每周日，我主持2小时的在线课程，讲解React Hooks、Firebase Auth以及全栈开发工作流，课程内容来自Hack4Impact 2025春季训练营。我还负责课堂活动，引导学生提问，并根据学生的项目需求调整课程内容。",
          "课外，我通过办公时间、代码审查和调试支持指导学生，并提供技术建议，帮助他们建立开发技能的自信。",
          "整个项目中，我与Hack4Impact-UMD联合执行官和Technica组织者紧密合作，确保课程与学生需求对齐，提供支持性和互动性强的学习体验。"
        ],
        images: [""]
    }
  },
  h4i: {
    title: "工程师 @ Hack4Impact",
    image: h4iImage, 
    date: "2025年1月 - 至今",
    tools: ["React", "TypeScript", "Firebase", "GCP", "Python", "Git"],
    content: {
        text: ["作为Hack4Impact的工程师，我有机会参与Food For All DC的项目，这是一个向华盛顿特区地区的食物不安全人群提供食物和杂货的非营利组织。", "在一个使用React.js前端和Firebase/Python后端的冲刺开发团队中，我参与开发了一款应用，通过实时客户数据管理、优化配送路线和简化调度流程来改进其配送系统。", "我最喜欢的功能之一是优化配送系统，我使用客户地址结合GCP地理定位API和Python图算法来计算司机的最佳路线，并将其显示在华盛顿特区的LeafletJS地图上。", "整体而言，该应用减少了30%的数据录入时间，并节省了每周5小时的路线创建和司机分配时间，使Food For All DC能够更高效地帮助超过100人每天。", "<b>“……Evan是少数获得团队成员全员满分评价的工程师之一”</b>"],
        images: [""]
    }
  },
  aiRepublic: {
    title: "软件工程实习生 @ AI Republic",
    image: aiRepublicImage,
    date: "2025年1月 - 2025年5月",
    tools: ["Svelte", "TailwindCSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Git"],
    content: {
        text: ["作为AI Republic的软件工程实习生，我参与开发了AI Republic Helper，将AI工具集成到Google Chrome中，以优化网页浏览效率。", "使用Svelte作为前端框架，我构建了多项AI功能，如AI代码解释器、翻译器和聊天机器人，这些功能连接到Python FastAPI后端和PostgreSQL数据库，提高了企业客户和个人用户的网页导航体验。", "我使用GitHub提交PR并高效管理不同版本的代码，同时参加每周与技术负责人、项目经理和其他实习生的站会。"],
        images: [""]
    }
  },
  freelance: {
    title: "自由软件开发者 @ Honey Pig BBQ",
    image: honeyPig,
    date: "2023年2月 - 2024年8月",
    tools: ["React", "HTML", "JavaScript"],
    content: {
        text: ["作为Honey Pig KBBQ的服务员，我注意到餐桌管理系统存在很多缺陷。哪些桌子已被占用、每个服务员的客户数量以及在岗员工信息都通过过时低效的纸质记录，导致客户和员工体验都不佳。", "出于对软件的热情，我自然而然地想出了解决方案。我的第一个自由开发项目是一个餐厅管理系统，使用HTML、CSS和JavaScript来跟踪桌子占用情况、服务员客户数量以及每日值班服务员。该系统被所有服务员采用，每天节省一小时以上的数据管理时间，并减少员工错误，改善客户体验，同时简化员工工作。", "之后，我被邀请协助开发他们新酒吧Micky's Soju House的网站，我使用React.js创建了一个互动菜单网站，更好地展示食品和饮品，提升在线影响力并促进业务增长。"],
        images: [""]
    }
  }
}

export const projects = {
  split: {
    title: "Split - Break Through Tech Career Launch",
    image: split,
    date: "2025年5月 - 至今",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "账单分摊应用"
              ],
        images: [""]
      }
  },
  terpMenu: {
    title: "TerpMenu",
    image: terpmenu,
    date: "2025年5月 - 至今",
    tools: ["React", "FastAPI", "Python", "MongoDB", "Docker"],
    content: {
        text: [
                "使用React开发了一款菜单应用，展示马里兰大学三家食堂的每日菜单，包括名称、图片、饮食限制和用户评分，以提升学生和员工的用餐体验。",
                "构建了Python后端，使用FastAPI和BeautifulSoup每日爬取更新菜单，并集成MongoDB数据库存储用户评论。",
                "使用Git进行协作和版本控制，使用Docker进行容器化和部署。"
              ],
        images: [""]
      }
  },
  shellmates: {
    title: "ShellMates",
    image: shellmates,
    date: "2025年5月 - 至今",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "交友应用"
              ],
        images: [""]
      }
  }
}

export const aboutMe = {
  paragraphs: ["除了软件工程，我非常热爱大自然、美食和音乐。", "如果我不在编程，你总能找到我在户外徒步，或者与朋友打网球和匹克球！我也喜欢地理寻宝，目前正在努力完成我的第100个寻宝点。", "为了放松和减压，我几乎总是弹吉他和钢琴，或听我最喜欢的乐队，如The Beatles, Queen和The Strokes！", "我也是一个超级吃货。从简单的奶茶，到和朋友去KBBQ，或者享受奶奶自制的越南粉，食物是让我最开心的事情之一。"],
  images: [
    {
    image: guitarImage,
    description: "在马里兰大学McKeldin广场的小型吉他即兴演奏"
    },
    {
      image: cache,
      description: "我最喜欢的地理寻宝点"
    },
    {
      image: hiking,
      description: "加州旅行期间在Big Sur徒步"
    },
    {
      image: polyphia,
      description: "万圣节Polyphia演唱会前排"
    },
    {
      image: tam1,
      description: "徒步Mt. Tamalpais 第一部分"
    },
    {
      image: tam2,
      description: "徒步Mt. Tamalpais 第二部分"
    },
    {
      image: picnic,
      description: "海滩上的Bánh mì和奶茶野餐！"
    },
    {
      image: concert,
      description: "我在UMD舞台上的最后一场演唱会"
    },
    {
      image: caliFirstMeal,
      description: "到达旧金山后的第一餐"
    },
    {
      image: beach,
      description: "马里兰州Ocean City海滩之旅"
    }
  ]
}

export const education = {
   paragraphs: ["我在马里兰大学学院公园分校读大三，主修计算机科学。", "在完成96个学分期间，我保持了<u>4.0的累计GPA</u>，并每学期都上了院长名单。", "我完成了多门编码课程，如面向对象编程I和II，学习了Java的核心编码概念和数据结构；计算机系统导论，学习了C语言、Unix和汇编的底层机制；编程语言组织，学习了OCaml和Rust的语言特性、设计和实现；以及JavaScript Web应用开发，实践了我的软件工程技能。", "我还学习了计算机科学相关数学课程，如统计与概率、线性代数和算法课程，学习设计高效计算机算法的方法，并分析其运行时间。"]
}
