import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="感谢您的订阅"
      intro="我会在发布新的博客文章、发布新的项目或分享我认为您想知道的任何有趣内容时发送您一封电子邮件。您可以随时取消订阅，不会有任何压力。"
    />
  )
}
