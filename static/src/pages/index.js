import { Layout, Menu, Breadcrumb, Card, Icon, Avatar, Row, Col } from 'antd';
import styles from './index.css';
import React, { Component, Fragment } from 'react';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class Analysis extends Component {
    render() {
        const topColResponsiveProps = {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 8,
            style: { marginBottom: 24 },
        };
        return (
            <Content style={{ paddingTop :70 }} className={styles.container}>
                    <div style={{  padding: 24, minHeight: 280 }}>
                    <h2 className={styles.sectionheader}>ALL ARTICLE</h2>
                
                    <Row gutter={24}>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                               style={{ width: "300",margin:"0 auto" }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row gutter={24}>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                
                                cover={<img alt="example" src="https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/59a549c22628259.jpg" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    
                                    title="apicloud之ios模块开发基础"
                                    description=" apicloud模块开发提供了js与底层交互的接口，官方的sdk用于方便开发模块，总结一下与js交互常用的方法  读取接..."
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                className={styles.cardcover}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<label type="setting" >1个月前</label>,<label type="setting" >1个月前</label>]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                className={styles.cardcover}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row gutter={24}>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                
                                cover={<img alt="example" src="https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/59a549c22628259.jpg" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    
                                    title="apicloud之ios模块开发基础"
                                    description=" apicloud模块开发提供了js与底层交互的接口，官方的sdk用于方便开发模块，总结一下与js交互常用的方法  读取接..."
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                className={styles.cardcover}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<label type="setting" >2018-04-11</label>,<label type="setting" >HAYWAEL</label>]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col {...topColResponsiveProps}>
                            <Card
                                style={{ width: "300",margin:"0 auto" }}
                                className={styles.cardcover}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                hoverable={true}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Col>
                        
                    </Row>
                    </div>
            </Content>
        )
    }
}

export default () => <Analysis />

