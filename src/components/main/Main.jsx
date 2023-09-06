import React, {Component} from "react";
import LatestRelease from "../latestRelease/LatestRelease";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <LatestRelease
                    fantasyBooks={data}
                />
            </div>
        )
    }
}

export default Main;