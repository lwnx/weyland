import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: '我的工具清单',
  description: '我使用的软件、喜爱的设备以及其他推荐的工具。',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="我使用的软件、设备以及擅长的事情"
      intro="经常有人问我使用什么工具来开发软件、保持高效，以下是我最喜爱的所有工具清单。"
    >
      <div className="space-y-20">
        <ToolsSection title="工作设备">
          <Tool title="Apple M4 Mac Mini, 内存 32GB">
            非常强大的配置，能是流畅运行设计软件、处理多任务和复杂渲染。确保在处理大型文件、多图层项目或运行多个应用程序时系统流畅不卡顿。
。
          </Tool>
          <Tool title="Redmi 4K Display XDR (标准玻璃)">
            当你处理大规模项目时，每一个像素都很重要。
          </Tool>
          <Tool title="Apple Magic Trackpad">
            很多人不喜欢用苹果鼠标，但我非常喜欢这种感觉。
          </Tool>
        </ToolsSection>
        <ToolsSection title="开发工具">
          <Tool title="Cursor">
            我喜欢Cursor，因为它的界面简单，功能强大。我可以在Cursor中编写代码，而不需要切换到其他应用程序。
          </Tool>
          <Tool title="TRAE CN">
            有时候我也用TRAE, 当Cursor额度不够用的时候，我会用TRAE来完成任务。
          </Tool>
        </ToolsSection>
        <ToolsSection title="设计工具">
          <Tool title="Figma">
            我们最初只是将Figma作为设计工具使用，但现在它已经成为整个公司的虚拟白板。从未想过协作功能会成为真正吸引人的地方。
          </Tool>
          <Tool title="Adobe Toolkit">  
            我很难避免不去使用Adobe软件，包括Photoshop、Illustrator、After Effects等。
          </Tool>
          <Tool title="Libulibu">
            虽然它不是很好用，但里面有很多我喜欢的功能。
          </Tool>
        </ToolsSection>
        <ToolsSection title="核心技能">
          <Tool title="设计视野">
            深度研究竞品的用户体验策略、交互结构和视觉风格，以发现新的设计方向和解决方案。
          </Tool>
          <Tool title="定位分析">
            运用用研方法深入理解目标用户，有效识别不同场景下的用户痛点，确保资源投入高价值区域。
          </Tool>
          <Tool title="执行输出">
            清晰表达设计方案和底层理念，并能主动推进还原度验证，确保设计高质量落地。
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
