import React, { Component } from 'react';

class Upload extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <meta charset="utf-8" />
                    <title>CIM Uploader</title>
                </header>
                <body>
                    <h1>Welcome to the CIM Uploader</h1>
                    <h3>Here you will be able to uload the following Authorize.net files:</h3>
                    <ul>
                        <li>CSV file with CC numbers</li>
                        <li>CSV file with profile ID numbers</li>
                        <li>CSV files with payment profile number</li>
                        <li>CSV files with shipping profiles</li>
                    </ul>
                    <h2>Upload Files below:</h2>
                    <label for="CC">Credit Card Number</label>
                    <input type="file" name="" value="" required />

                    <p></p>
                    <label for="PN">Profiles Numbers</label>
                    <input type="file" name="" value=""/>

                        <p></p>
                        <label for="PPN">Payment Profile Numbers</label>
                        <input type="file" name="" value=""/>

                            <p></p>
                            <label for="SP">Shipping Profile Numbers</label>
                            <input type="file" name="" value="" />

                            

                            <input type="submit" name="" value="UPLOAD" />

  </body>
            </div>
                    )
                }
            }
export default Upload