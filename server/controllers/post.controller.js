import Post from '../models/post';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ posts });
  });
}

export function addPost(req, res) {

}

export function getPost(req, res) {

}

export function deletePost(req, res) {

}
