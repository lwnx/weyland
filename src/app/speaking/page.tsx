import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: '我的工具',
  description:
    '我开发的工具和插件，包括小猫记分微信小程序、EditLottie动画编辑工具和Figma插件系列。',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="我的个人项目"
      intro="这里展示了我参与开发的一些实用工具和插件，旨在解决实际生活中的痛点问题。"
    >
      <div className="space-y-20">
        <SpeakingSection title="小猫记分 (微信小程序)">
          <Appearance
            href="#"
            title="从0到1：小猫记分麻将记分小程序的探索"
            description="出于个人兴趣和解决与朋友打麻将时纸笔计分不便、易出错的实际问题，自发设计并开发的小程序。围绕牌桌场景设计，提供高效直观的操作体验。"
            event="个人持续项目 | 独立产品设计师 & 开发者"
            cta="请前往微信体验"
          />
        </SpeakingSection>
        <SpeakingSection title="Lottie动画编辑工具">
          <Appearance
            href="http://lwnx.asia/"
            title="EditLottie - Create and Edit Lottie Animations"
            description="一个在线工具，旨在帮助用户无需代码编辑器即可快速编辑Lottie文件的图层。可视化编辑Lottie动画，自动识别JSON文件，修改完成后可直接下载。"
            event="主要特点：简单编辑器、易于操作、快速导出"
            cta="访问官网"
          />
        </SpeakingSection>
        <SpeakingSection title="Figma插件系列">
          <Appearance
            href="https://www.figma.com/@lwnxai"
            title="@lwnxai - Figma插件开发者"
            description="这是一个在Figma Community上的个人资料页，分享了一系列实用的Figma插件和资源，帮助设计师提高工作效率。"
            event="热门插件：Image Effect Sync、Clip Content、Golden Ratio、Watermark Generator、Corner Artist"
            cta="访问Figma个人主页"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
