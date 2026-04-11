export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'leading-is-personal-art',
    title: 'Leading is first a personal art before a public act',
    excerpt:
      'Leadership begins with self-mastery. Before we can inspire others, we must understand ourselves—our values, our triggers, our purpose.',
    content: `Leadership begins with self-mastery. Before we can inspire others, we must understand ourselves—our values, our triggers, our purpose.

The most effective leaders are those who have done the internal work. They've examined their beliefs, confronted their shadows, and developed a coherent philosophy that guides their actions.

This personal art of leadership is not about perfection. It's about authenticity, vulnerability, and a commitment to continuous growth. It's about recognizing that the way we show up in the world—our presence, our energy, our integrity—is a direct reflection of our internal state.

When you master your own mind, your emotions, and your intentions, that mastery naturally radiates outward. People feel it. They trust it. And they follow it.

The public act of leadership—the decisions made, the vision cast, the impact created—is built on this foundation of personal mastery. Without it, leadership is merely performance. With it, leadership becomes transformation.`,
    date: 'March 15, 2024',
    category: 'Leadership',
  },
  {
    id: '2',
    slug: 'work-that-multiplies-beauty',
    title: 'The only work that matters is work that multiplies beauty on the earth',
    excerpt:
      'In a world of urgent problems and competing demands, we must ask ourselves a fundamental question: What kind of impact do we want to leave?',
    content: `In a world of urgent problems and competing demands, we must ask ourselves a fundamental question: What kind of impact do we want to leave?

Too much of our energy goes into work that diminishes—extracting resources, exploiting systems, undermining human potential. The antidote is work that multiplies beauty.

Beauty, in this context, is not superficial. It's the deep coherence of form and function. It's systems that honor human dignity. It's solutions that elevate rather than diminish. It's knowledge that liberates rather than constrains.

When you engage in work that multiplies beauty, you're not just solving a problem. You're contributing to a higher order. You're adding to the world in a way that compounds over time.

This is the work of artists, designers, educators, healers, engineers, and strategists who recognize that their craft is a form of service. It's work done with precision and care. It's work that asks not "what can I extract?" but "what can I add?"

The question for each of us is simple: Are we engaged in work that multiplies beauty? And if not, what would it take to shift toward it?`,
    date: 'February 28, 2024',
    category: 'Work & Purpose',
  },
  {
    id: '3',
    slug: 'designing-systems-seeing-future',
    title: 'Designing systems is about seeing what does not yet exist',
    excerpt:
      'Great system design is an act of imagination. It requires the ability to envision structures and processes that don\'t yet exist in the world.',
    content: `Great system design is an act of imagination. It requires the ability to envision structures and processes that don't yet exist in the world.

Most people work within existing systems. They optimize processes, follow protocols, and adapt to constraints. This is necessary work, but it's not system design.

System designers see gaps. They see inefficiencies that others have normalized. They see human potential being wasted because the infrastructure doesn't exist to channel it productively.

The work of designing systems requires deep observation. You must understand how things currently work, the pain points, the unmet needs. But you must also have the courage to imagine alternatives.

This is where vision meets strategy. It's where creativity meets pragmatism. You're not just dreaming about what could be—you're architecting the pathways to get there.

The best system designers are those who combine:
- Deep understanding of human behavior
- Technical clarity about what's possible
- Strategic thinking about implementation
- Creative audacity to imagine the new

When you design a system that works, you create the conditions for exponential impact. One system can serve millions. One structure can multiply human potential across generations.

This is why system design is some of the most important work we can do.`,
    date: 'February 10, 2024',
    category: 'Systems & Strategy',
  },
  {
    id: '4',
    slug: 'education-as-liberation',
    title: 'Education as a tool for liberation',
    excerpt:
      'Education is not just about transferring knowledge. It\'s about awakening potential and expanding possibility for human beings.',
    content: `Education is not just about transferring knowledge. It's about awakening potential and expanding possibility for human beings.

When education is done right, it liberates. It frees people from the constraints of ignorance, narrow thinking, and limited opportunity. It opens doors that were previously invisible.

But when education is done poorly—when it's about compliance, conformity, and narrow measures of success—it can actually constrain human potential. It teaches people what to think rather than how to think.

The kind of education we need is one that:
- Honors the unique gifts and potential of each individual
- Develops critical thinking and creativity
- Connects knowledge to real-world impact
- Builds confidence and agency
- Expands the sense of what's possible

This is transformative education. It's not transactional (I give you information). It's relational (I help you discover your potential).

The educators who do this work understand that they're not just teaching subjects. They're shaping futures. They're expanding possibilities for entire communities and generations.

In times of rapid change, this kind of education becomes even more critical. We need people who can think independently, adapt quickly, and create solutions to problems we haven't yet encountered.

That's the power of education as liberation.`,
    date: 'January 22, 2024',
    category: 'Education',
  },
]
