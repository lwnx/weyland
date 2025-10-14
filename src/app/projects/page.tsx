import { type Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    id: 'coloros',
    title: 'ColorOS 12 相机系统重构',
    subtitle: '三品牌合一的体验基石：ColorOS 12 相机系统全局可用性重构',
    period: '2021年 - 2022年',
    role: '核心交互设计师 / 项目主导者',
    skills: ['系统级设计', '设计系统', '交互架构', '跨端适配'],
    background: 'OPPO、一加、Realme三品牌合并后，相机系统面临体验割裂、交互逻辑不统一和代码冗余的挑战。需要为亿级用户建立一套统一、稳定、可扩展的体验框架。',
    challenges: [
      '体验割裂：三品牌历史遗留的交互逻辑和视觉风格不统一',
      '技术债务：底层代码冗余，维护和迭代成本高',
      '国际化差异：需兼顾全球不同地区用户的使用习惯和审美偏好'
    ],
    strategy: [
      '建立统一设计语言：主导定义了色彩、圆角、字阶等基础设计令牌（Design Tokens），从原子层面保证一致性。',
      '组件化系统架构：将复杂功能模块化，构建可复用的组件库，显著提升开发效率。',
      '关键路径优化：重构拍照和专业模式的操作流程，采用"渐进披露"原则平衡功能强大性与操作简洁性。',
      '全球化设计：针对多语言环境优化文本布局，解决德语、西班牙语等长文字裁剪问题。'
    ],
    highlights: [
      '弹性布局规范：制定了一套适配不同屏幕尺寸和比例的规则。',
      '动态视觉反馈：优化动效参数，模拟物理世界的线性阻尼感，提升操作质感。'
    ],
    results: [
      '成功上线三品牌统一相机系统，用户满意度调研得分显著提升',
      '设计系统使后续UI开发效率提升约40%',
      '为ColorOS 12的"无边界设计"理念提供了核心交互支撑'
    ]
  },
  {
    id: 'lizhi',
    title: '荔枝FM 5.0 增长改版',
    subtitle: '激活存量市场：荔枝FM 5.0直播业务增长设计',
    period: '2020年 - 2021年',
    role: '核心交互设计师',
    skills: ['数据驱动设计', '增长设计', '用户参与度提升'],
    background: '面对核心直播业务增长放缓，需通过体验重构提升直播功能的曝光率、用户参与度和互动转化率。',
    challenges: [
      '首页信息过载，核心直播入口渗透率低',
      '用户互动玩法陈旧，参与感不强',
      '需平衡商业诉求与用户体验'
    ],
    strategy: [
      '信息架构瘦身：移除低效Banner，优化动态流卡片布局，提升首屏"屏效"。',
      '直播入口强化：在信息流中突出直播状态标识，增加"好友正在听"等社交动力元素。',
      '互动玩法创新：引入轻量级PK、弹幕互动等模式，提升直播间趣味性。',
      '数据驱动决策：通过A/B测试验证设计方案，确保改动正向影响核心指标。'
    ],
    highlights: [
      '社交化引导：将社交关系与内容发现结合，降低用户发现感兴趣直播的成本。',
      '渐进式互动：设计从轻量到深度的互动阶梯，适应不同参与意愿的用户。'
    ],
    results: [
      '直播入口点击率提升15%',
      '用户平均直播观看时长增加20%',
      '直播间互动率（评论、点赞、送礼）提升30%'
    ]
  },
  {
    id: 'lizhi-car',
    title: '荔枝播客车载端 (HMI设计)',
    subtitle: '定义车载音频体验新标准：荔枝播客多品牌车企合作项目',
    period: '2020年 - 2021年',
    role: '车载端体验设计师 / 项目核心成员',
    skills: ['HMI设计', '车载场景', '软硬件结合', '多端适配'],
    background: '与理想、小鹏、蔚来等多品牌车企合作，将荔枝播客体验融入车载系统，抢占智能座舱音频场景。',
    challenges: [
      '安全第一原则：所有交互需优先保障驾驶安全',
      '多屏幕适配：不同车企的屏幕尺寸、比例和交互逻辑差异大',
      '驾驶场景限制：在受限环境中提供沉浸、便捷的音频体验'
    ],
    strategy: [
      '驾驶场景研究：确立"高效、友好、安全"三大设计原则，定义主驾驶易操作区。',
      '跨平台适配方案：抽象共性组件，建立弹性布局规则，实现"一套设计，多端适配"。',
      '情境化体验：针对隧道出入、昼夜交替等光照变化，优化亮色/暗色模式切换。',
      '语音交互整合：探索与车载原生语音系统的无缝结合。'
    ],
    highlights: [
      '安全操作热力图：通过研究划定安全操作区域，高频功能严格布局于此。',
      '品牌无缝融合：在确保安全的前提下，将荔枝播客的品牌基因（如克莱因蓝）融入车载环境。'
    ],
    results: [
      '成功上线理想、小鹏、蔚来、奥迪等主流车企平台',
      '成为荔枝播客重要的内容分发渠道之一',
      '积累了宝贵的车载HMI设计方法论'
    ]
  },
  {
    id: 'hiha',
    title: 'Hiha海外社交应用',
    subtitle: '出海社交破局：Hiha的跨文化设计实践',
    period: '2019年 - 2020年',
    role: '用户体验设计师',
    skills: ['国际化设计', '跨文化研究', '社交产品', '1v1视频社交'],
    background: '面向欧美市场打造一款1v1视频社交应用，切入海外社交赛道，与当地主流产品竞争。',
    challenges: [
      '文化差异：欧美用户审美、交互习惯与国内显著不同',
      '信任与安全：建立让用户感到安全可靠的陌生人社交环境',
      '产品差异化：在成熟市场中找到独特价值主张'
    ],
    strategy: [
      '本地化洞察：研究欧美用户偏好，倾向简洁直接的设计，对隐私控制敏感。',
      '核心路径简化：极致简化匹配和视频通话流程，减少用户犹豫。',
      '安全体系构建：设计强化的隐私控制面板和便捷的举报屏蔽流程。',
      '破冰互动：设计轻量互动游戏和话题建议，降低初次交流尴尬。'
    ],
    highlights: [
      '文化适配的视觉语言：采用欧美用户偏好的视觉表达，避免亚洲设计风格的直接移植。',
      '清晰的权限管理：让用户清晰掌控个人信息可见范围。'
    ],
    results: [
      '成功推出面向欧美市场的产品版本',
      '用户反馈显示其简洁直观的交互和安全感获得认可',
      '积累了跨文化产品设计经验'
    ]
  },

  {
    id: 'utour',
    title: '优途旅行 (概念设计)',
    subtitle: '未来旅行体验探索：优途旅行AI旅行规划概念设计',
    period: '概念项目',
    role: '概念设计师',
    skills: ['AI与设计创新', '用户体验前瞻', '概念设计'],
    background: '探索AI技术在旅行规划领域的应用可能性，构想下一代智能旅行助手体验。',
    challenges: [
      '技术可行性：平衡前沿构想与当前技术可实现性',
      '用户信任：如何让用户信任AI的推荐并感到可控',
      '体验差异化：在现有旅行产品之外提供独特价值'
    ],
    strategy: [
      'AI个性化旅程定制：用户输入偏好，AI生成高度个性化的旅行路线。',
      '可控的自动化：界面清晰展示AI推荐逻辑，用户可轻松调整计划。',
      '多模态交互：结合语音、图形化界面，提供自然流畅的交互体验。',
      '情境感知服务：根据实时位置、天气、用户状态推送相关信息。'
    ],
    highlights: [
      '"探索-规划-体验"闭环：设计覆盖行前规划、途中导航、行程记录的全流程。',
      '数据可视化行程：将复杂行程以直观的时间轴和地图形式展现。'
    ],
    results: [
      '展示了对于新兴技术如何赋能用户体验的思考',
      '体现了前瞻性设计探索能力',
      '可作为吸引创新型公司的作品案例'
    ]
  }
]

// 生成项目首字母作为图标 - 显示大写英文字母
function ProjectIcon({ id }: { id: string }) {
  // 从项目ID获取首字母，确保是英文字母
  const initial = id.charAt(0).toUpperCase()
  return (
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <span className="text-lg font-bold text-teal-500 flex items-center justify-center h-full w-full">{initial}</span>
    </div>
  )
}

export const metadata: Metadata = {
  title: '项目',
  description: '我参与和主导的设计项目，涵盖系统级设计、增长设计、车载HMI等多个领域。'
}

export default function Projects() {
  return (
    <SimpleLayout
      title="我的设计项目"
      intro="这些是我主导或参与的设计项目，涵盖了系统级设计、增长设计、车载HMI、社交产品等多个领域。每个项目都体现了我对用户体验的深度思考和解决复杂问题的能力。"
    >
      <div className="space-y-24">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <ProjectIcon id={project.id} />
            
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {(project.id === 'coloros' || project.id === 'lizhi' || project.id === 'lizhi-car') ? (
                  <Link href={project.id === 'coloros' ? "https://www.figma.com/proto/aISS1R1qeQa6t8ejdEindo/ColorOS-12-%E7%9B%B8%E6%9C%BA%E7%B3%BB%E7%BB%9F%E9%87%8D%E6%9E%84?page-id=0%3A1&node-id=1-28&p=f&viewport=61%2C471%2C0.09&t=f9iI8et4B6tDZsVD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A28" : project.id === 'lizhi' ? "https://www.figma.com/proto/6s2FxTAW9B98IIKv7cmbz0/%E8%8D%94%E6%9E%9DFM-5.0-%E5%A2%9E%E9%95%BF%E6%94%B9%E7%89%88?node-id=0-1&t=EIehENUJ6h5u6tgD-1" : "https://www.figma.com/proto/R5ezE0ojw81FlK7FF9OoAV/%E8%8D%94%E6%9E%9D%E6%92%AD%E5%AE%A2%E8%BD%A6%E8%BD%BD%E7%AB%AF?node-id=0-1&t=PtnIkaoVUxChSL3z-1"} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-zinc-800 hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-400 transition-colors">
                    {project.title}
                    <span className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">🔗</span>
                  </Link>
                ) : (
                  project.title
                )}
              </h2>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{project.subtitle}</p>
              
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  {project.period}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  {project.role}
                </span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-3">
                 {project.skills.map((skill, index) => (
                   <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>
            
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">项目背景</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.background}</p>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">核心挑战</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block h-1.5 w-1.5 mt-1.5 rounded-full bg-teal-500"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">设计策略与过程</h3>
                <ol className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.strategy.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">设计亮点</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block h-1.5 w-1.5 mt-1.5 rounded-full bg-teal-500"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">项目成果</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block h-1.5 w-1.5 mt-1.5 rounded-full bg-teal-500"></span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800" />
          </Card>
        ))}
      </div>
    </SimpleLayout>
  )
}
