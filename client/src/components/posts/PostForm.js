import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";
import PostItem from "./PostItem";
import PostFeed from "./PostFeed";
import Posts from "./Posts";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //this does actual error checking
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <div className="container">
          <div className="profile-page tx-13">
            <div className="row">
              <div className="col-12 grid-margin">
                <div className="profile-header">
                  <div className="cover">
                    <div className="gray-shade" />
                  </div>
                </div>
              </div>
            </div>

            <div className="post-form mb-3">
              <div className="card card-info">
                <div className="card-header bg-info text-white">
                  Whats on your Mind...
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <TextAreaFieldGroup
                        placeholder="Create a post"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        error={errors.text}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row profile-body">
              {/* left wrapper start */}
              <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                <div className="card rounded">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6 className="card-title mb-0">About</h6>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-horizontal icon-lg text-muted pb-3px"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                          </svg>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-edit-2 icon-sm mr-2"
                            >
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>{" "}
                            <span className>Edit</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-git-branch icon-sm mr-2"
                            >
                              <line x1={6} y1={3} x2={6} y2={15} />
                              <circle cx={18} cy={6} r={3} />
                              <circle cx={6} cy={18} r={3} />
                              <path d="M18 9a9 9 0 0 1-9 9" />
                            </svg>{" "}
                            <span className>Update</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye icon-sm mr-2"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>{" "}
                            <span className>View all</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <p>
                      Hi! I'm Shecode the Senior UI Designer at Lakehub. We hope
                      you enjoy the design and quality of Social.
                    </p>
                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Joined:
                      </label>
                      <p className="text-muted">November 15, 2015</p>
                    </div>
                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Lives:
                      </label>
                      <p className="text-muted">New York, USA</p>
                    </div>
                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Email:
                      </label>
                      <p className="text-muted">me@nobleui.com</p>
                    </div>
                    <div className="mt-3">
                      <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                        Website:
                      </label>
                      <p className="text-muted">www.nobleui.com</p>
                    </div>
                    <div className="mt-3 d-flex social-links">
                      <a
                        href="javascript:;"
                        className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon github"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                          data-toggle="tooltip"
                          title
                          data-original-title="github.com/nobleui"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                      <a
                        href="javascript:;"
                        className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                          data-toggle="tooltip"
                          title
                          data-original-title="twitter.com/nobleui"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                      <a
                        href="javascript:;"
                        className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                          data-toggle="tooltip"
                          title
                          data-original-title="instagram.com/nobleui"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* left wrapper end */}

              {/* middle wrapper start */}
              {/* <PostFeed/> */}
              
              <div className="col-md-8 col-xl-6">
           
                {this.props.Posts}
                
             
              </div>
              {/* middle wrapper end */}
              {/* right wrapper start */}
              <div className="d-none d-xl-block col-xl-3 right-wrapper">
                <div className="row">
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <div className="card-body">
                        <h6 className="card-title">latest photos</h6>
                        <div className="latest-photos">
                          <div className="row">
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure>
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure className="mb-0">
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure className="mb-0">
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar8.png"
                                  alt
                                />
                              </figure>
                            </div>
                            <div className="col-md-4">
                              <figure className="mb-0">
                                <img
                                  className="img-fluid"
                                  src="https://bootdey.com/img/Content/avatar/avatar9.png"
                                  alt
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 grid-margin">
                    <div className="card rounded">
                      <div className="card-body">
                        <h6 className="card-title">suggestions for you</h6>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar3.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar4.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar5.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center hover-pointer">
                            <img
                              className="img-xs rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt
                            />
                            <div className="ml-2">
                              <p>Mike Popescu</p>
                              <p className="tx-11 text-muted">
                                12 Mutual Friends
                              </p>
                            </div>
                          </div>
                          <button className="btn btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user-plus"
                              data-toggle="tooltip"
                              title
                              data-original-title="Connect"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right wrapper end */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(PostForm);
