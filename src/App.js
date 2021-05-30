import "./App.css";
import { Layout, Input, Menu,Button } from "antd";
import Card from "./Card";
import { SearchOutlined } from '@ant-design/icons';
import React from "react";
import "../node_modules/antd/dist/antd.css";
const { Sider, Content, Header } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: [],
      artist: "",
    };
    this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState(
      {
        artist: e.target.value,
      },
      () => {
       this.onSubmit();
      }
    );
  }
  onSubmit(){
     const url1 = new URL(
          "https://itunes.apple.com/search?term=zayn"
        );
        const url = "https://itunes.apple.com/search?term=zayn";
        //   const params = { term: e.target.value};
        // url1.{this.state.artist}=new URLSearchParams(params);

        fetch(url1)
          .then(function (data) {
            return data.json();
          })
          .then((data) => {
            this.setState(
              {
                collection: data.results,
              },
              () => {
                console.log(this.state.collection);
              }
            );
          });

  }

  render() {
    const cards = this.state.collection.map((collection) => {
      return (
        <Card img={collection.artworkUrl100} name={collection.artistName} />
      );
    });
    return (
      <div className="App">
        <Layout>
          <Sider>
            <h1 style={{ fontSize: "20px", color: "white" }}>Slider</h1>
            <Menu
              style={{
                width: "100%",
                position: "relative",
                color: "darkgrey",
                top: "5em",
                backgroundColor: "#E43F5A",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
            >
              <Menu.Item
                style={{ padding: "10px", textAlign: "center" }}
                key="1"
              >
                Navigation One
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="2">
                Navigation Two
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="3">
                Navigation Three
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="5">
                Navigation Four
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="6">
                Navigation Five
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <h1 style={{ "fontSize": "30px", color: "white" }}>
                ITunes Music
              </h1>
            </Header>

            <Layout style={{ backgroundColor: "#121212", height: "100px" }}>
              <div className="serach">
              <form onSubmit={this.onSubmit()}>
                <Input
                  placeholder="search"
                  bordered={false}
                  style={{
                    width: "500px",
                    borderBottom: "3px solid #E43F5A",
                    height: "45px",
                    color: "white",
                    position: "relative",
                    top: "25px",
                  }}
                  value={this.state.artist}
                  onChange={(e) => this.onChange(e)}
                />
               <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </form>
              </div>
            </Layout>
            <Content>{cards}</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
