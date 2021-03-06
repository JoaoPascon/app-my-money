import React , { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { create, init, update, remove } from './billingCyclesActions'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    componentWillUnmount(){
        this.props.init()
    }
    
    render () {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamento" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=" Listar" icon="fa fa-bars" target="tabList" />
                            <TabHeader label=" Incluir" icon="fa fa-plus" target="tabCreate" />
                            <TabHeader label=" Alteral" icon="fa fa-pencil" target="tabUpdate" />
                            <TabHeader label=" Excluir" icon="fa fa-times" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'> 
                                <List/> 
                            </TabContent>
                            <TabContent id='tabCreate'> 
                                <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="btn btn-primary"/>
                            </TabContent>
                            <TabContent id='tabUpdate'> 
                                <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="btn btn-warning"/>
                             </TabContent>
                            <TabContent id='tabDelete'> 
                                <Form onSubmit={this.props.remove} submitLabel="Excluir" submitClass="btn btn-danger" readOnly={true}/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({create, init, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)