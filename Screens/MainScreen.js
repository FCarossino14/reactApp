import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import { Container, Button, Grid, Col, Row, Text} from 'native-base';
import { SearchBar, Header, Divider, Icon, Card, Image} from 'react-native-elements';

  const llamarAPIBusqueda = (search) => {
        return fetch('http://www.omdbapi.com/?apikey=e4f4bf3e&s='+search)
          .then((response) => response.json())
          .catch((error) => { console.error(error);});
  };

export default class MainScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isReady: false,
            search:'',
            pelicula: [],
            pelicula1: [],
            pelicula2: [],
            pelicula3: [],
            pelicula4: [],
            pelicula5: [],
        }
    }
    async componentDidMount() {
        this.setState({ isReady: true });
      }
    handlerLogout(){
        this.props.onLogout();
    }

    updateSearch = (search) => {
        this.setState({ search });
      };

    render(){

        const { search } = this.state;

        if (!this.state.isReady) {
            return <AppLoading />;
          }
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{}}
                    centerComponent={{ text: 'imDB', style: { fontSize:30, color: '#fff' } }}
                    rightComponent={
                        <Icon
                            name='close'
                            color='#fff'
                            onPress={() => this.handlerLogout()}
                        />
                      }
                />
                <SafeAreaView>
                    <ScrollView style={styles.scrollView}>
                <SearchBar
                    platform="ios"
                    placeholder="Escribir aqui..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Button onPress={() => this.handlerBusqueda()}>
                  <Text>Buscar</Text>
                </Button>
                <Card>
                    <Row>
                <Image
                    source={{ uri: this.state.pelicula1.Poster }}
                     style={{ width: 50, height: 50 }}
                    />
                <Text>
                  {(this.state.pelicula1.Title)}
                  {"\n"}
                  {(this.state.pelicula1.Year)}
                  </Text>
                  </Row>
                </Card>
                <Card>
                <Row>
                <Image
                    source={{ uri: this.state.pelicula2.Poster }}
                     style={{ width: 50, height: 50 }}
                    />
                  <Text>
                  {(this.state.pelicula2.Title)}
                  {"\n"}
                  {(this.state.pelicula2.Year)}
                  </Text>
                  </Row>
                  </Card>
                <Card>
                <Row>
                <Image
                    source={{ uri: this.state.pelicula3.Poster }}
                     style={{ width: 50, height: 50 }}
                    />
                  <Text>
                  {(this.state.pelicula3.Title)}
                  {"\n"}
                  {(this.state.pelicula3.Year)}
                  </Text>
                  </Row>
                  </Card>
                <Card>
                <Row>
                <Image
                    source={{ uri: this.state.pelicula4.Poster }}
                     style={{ width: 50, height: 50 }}
                    />
                  <Text>
                  {(this.state.pelicula4.Title)}
                  {"\n"}
                  {(this.state.pelicula4.Year)}
                  </Text>
                  </Row>
                  </Card>
                <Card>
                <Row>
                <Image
                    source={{ uri: this.state.pelicula5.Poster }}
                     style={{ width: 50, height: 50 }}
                    />
                  <Text>
                  {(this.state.pelicula5.Title)}
                  {"\n"}
                  {(this.state.pelicula5.Year)}
                  </Text>
                  </Row>
                  </Card>
                  </ScrollView>
    </SafeAreaView>
            </View>
        );
    }

handlerBusqueda(){
    llamarAPIBusqueda(this.state.search).then(busqueda=> {
      this.setState({pelicula1: busqueda.Search[0],
        pelicula2: busqueda.Search[1],
        pelicula3: busqueda.Search[2],
        pelicula4: busqueda.Search[3],
        pelicula5: busqueda.Search[4],
    });
    });
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/*
{"Search":
[{"Title":"School of Rock",
"Year":"2003",
"imdbID":"tt0332379",
"Type":"movie",
"Poster":"https://m.media-amazon.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_SX300.jpg"},
{"Title":"Old School","Year":"2003","imdbID":"tt0302886","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzI4NDIzMDgtNGNkZi00MTI2LWJhYzgtYzM5NThhMTQ0OGIzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{"Title":"High School Musical","Year":"2006","imdbID":"tt0475293","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmQ3MWEyNTYtOTY1OC00MTljLWI3OGUtMmU1ZDc2OTYxNDQ4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg"},{"Title":"High School Musical 3","Year":"2008","imdbID":"tt0962726","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDE1NjU2NTMyNV5BMl5BanBnXkFtZTcwMTg3NDA3MQ@@._V1_SX300.jpg"},{"Title":"High School Musical 2","Year":"2007","imdbID":"tt0810900","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjI5ODI4NTc1MF5BMl5BanBnXkFtZTgwMDg3ODYzMjE@._V1_SX300.jpg"},{"Title":"Romy and Michele's High School Reunion","Year":"1997","imdbID":"tt0120032","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYWI2NTYyNTAtMjI4ZC00NzY4LThhZjctMDA4NWMyYWE4ODc5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Night School","Year":"2018","imdbID":"tt6781982","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWU5NjgxZWItY2E2ZC00NDM5LTg4MzQtMjBhNjE5Njc1NzdhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"},{"Title":"School for Scoundrels","Year":"2006","imdbID":"tt0462519","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTgzZTM0NTktNGEzMy00ZjlkLWI3NDctNjZlYzgxOWQ4NzFiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg"},{"Title":"Back to School","Year":"1986","imdbID":"tt0090685","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYxMTIyOTM1MF5BMl5BanBnXkFtZTcwNzQ0MTcyNA@@._V1_SX300.jpg"},{"Title":"School Ties","Year":"1992","imdbID":"tt0105327","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZTJkMDFkYzgtMTFkYS00MDFhLTljNzEtNTAzN2Y2ZjBkYTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}],"totalResults":"2107","Response":"True"}
*/ 