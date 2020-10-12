import React from "react";
class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state ={value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail=this.sendMail.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append ("text" , this.state.value);
        fetch("http://ola.alesiaqn.beget.tech/sendMail", {
            method: "POST",
            body: formData
        });
        event.preventDefault()
    }



    render() {
       return (
           <div className="container-fluid mt-20 mb-20 ">
            <div className="container">

                <div className="row">

                    <div className="col-lg-8 col-lg-offset-2">

                        <h1 className="text-center">Let's chat!</h1>
                        <h5 className="text-center">Давайте пообщаемся!</h5>

                        <div className="mt-20">

                            <h3 className="lead">Please, write me your wishes and feedback</h3>
                            <h5 className="text-center">Напишите мне Ваши пожелания/отзывы</h5>
                        </div>


                        <form id="contact-form" method="post" action="php/sendMail.php" role="form" onSubmit={this.sendMail}>

                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Lastname"/>
                                </div>
                            </div>

                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_message">Message *</label>
                                            <textarea className="form-control"
                                                      placeholder="Message for me *" rows="4" required="required"
                                                      data-error="Please,leave us a message." value={this.state.value} onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <input type="submit" className="btn btn-warning btn-send" value="Send message"/>
                                    </div>

                                </div>

                            </div>

                        </form>

                    </div>


                </div>


            </div>
        </div>

       )
    };
}
export default Contact;