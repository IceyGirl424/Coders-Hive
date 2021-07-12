import React from "react";
import ReactDOM from "react-dom";


function CommonResources(){
    return(
        <div className="Resources">
            
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="background-header" style={{ padding: 0 }}>
                        <Row gutter={[16, 16]} justify="center" align="middle">
                            <Col>
                            <Title
                            level={3}
                            style={{
                                // textAlign: 'center',
                                paddingTop: ".5em",
                                color: "white",
                            }}
                            >
                                {" "}
                                ≿————-❈ Common Resources ❈————-≾
                            </Title>
                            </Col>
                        </Row>
                    </Header>
                </Layout>
            


        </div>

    )
}

export default CommonResources;