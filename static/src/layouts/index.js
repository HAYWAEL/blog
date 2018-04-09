import { Layout, Menu, Icon ,Breadcrumb} from 'antd';
import styles from './index.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default function(props) {
    return (
      <Layout>
    <Header style={{ position: 'fixed', width: '100%' ,background:'#fff'}}>
      <div className={styles.logo} >HAYWAEL</div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <SubMenu title={<span><Icon type="code-o" />技术</span>}>
          <MenuItemGroup title="WEB">
            <Menu.Item key="setting:1">JavaScript</Menu.Item>
            <Menu.Item key="setting:2">Node</Menu.Item>
            <Menu.Item key="setting:3">CSS</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="其他">
            <Menu.Item key="setting:4">Go</Menu.Item>
            
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span><Icon type="global" />其他</span>}>
          
            <Menu.Item key="setting:5">电影</Menu.Item>
            <Menu.Item key="setting:6">摄影</Menu.Item>
          
          
        </SubMenu>
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      
      {
        props.children
      }
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      HAY©2018 Created by HAY
    </Footer>
  </Layout>


    );
  }