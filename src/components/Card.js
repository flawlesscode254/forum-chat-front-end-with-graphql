function Card({ username, body, likeCount, commentCount }) {
  return (
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-8 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{username}</h5>
              <p class="card-text">{body}</p>
              <div class="row justify-content-between">
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    Likes
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {likeCount}
                    </span>
                  </button>
                </div>
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    Comments
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {commentCount}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
