import Layout from '@/layout'

const testTableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/test-table',
  name: 'Table',
  alwaysShow: true,
  meta: {
    title: '测试表格',
    icon: 'table'
  },
  children: [
    {
      path: 'test-table',
      component: () => import('@/views/table/test-table'),
      name: '测试表格',
      meta: { title: '测试表格' }
    }
  ]
}
export default testTableRouter
