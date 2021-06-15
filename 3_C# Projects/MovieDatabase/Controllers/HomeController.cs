using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Comp235MVCDemo.DataAccessObjects;
using Comp235MVCDemo.Models;

namespace Comp235MVCDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        //Updated Movie ActionResult, takes in the Save String
        public ActionResult Movie(Movie m, String Save)
        {
            ViewBag.Message = "My Movie Page.";
            MovieDAO dAO = new MovieDAO();
            if (Save == "Save")
            {
                dAO.updateMovie(m);
                m.IsEditable = false;
                dAO.getMovieById(m.Id);
            }  
            else
            {
                m = dAO.getMovieById(12);
            }
            return View(m);
        }

        //Trigger ActionResult to change DisplayBoxes to EditText Fields
        public ActionResult Edit(Movie m)
        {
            MovieDAO dAO = new MovieDAO();
            m = dAO.getMovieById(m.Id);
            m.IsEditable = true;
            ViewBag.Message = "Add A Movie Page";
            return View("Movie", m);
        }

        public ActionResult addMovie(Movie m, string Save) // each view need an Action Result Method to be viewed
        {
            ViewBag.Message = "Add A Movie Page";
            //'Save' is the name of the 'value' property on the Button in the AddMovie.cshtml file
            if (Save == "Save")
            {
                MovieDAO dAO = new MovieDAO();
                dAO.insertMovie(m);
                ViewBag.Message = "Movie Added successfully";
            }
            return View("AddMovie");
        }

        //Method to Update Movie that checks for Save Event 
        public ActionResult AllMovies(MoviesList m, String Save)
        {
            ViewBag.Message = "All movies.";
            MovieDAO dAO = new MovieDAO();
            if (Save == "Save")
            {
                Movie movie = m.Items[m.EditIndex];
                dAO.updateMovie(movie);
                movie.IsEditable = false;
                m.EditIndex = -1;
            }
            m = dAO.getAllMovies();
            return View(m);
        }

        //Method to navigate to details view (Movie)
        public ActionResult Details(Movie movie)
        {
            MovieDAO dAO = new MovieDAO();
            movie = dAO.getMovieById(movie.Id);
            return View("Movie", movie);
        }

        //Edit movie from Movie List
        public ActionResult MoviesEdit(int? id, MoviesList movies)
        {
            int id2 = id ?? default(int);
            MovieDAO dAO = new MovieDAO();
            movies = dAO.getAllMovies();
            movies.EditIndex = dAO.setMovieToEditMode(movies.Items, id2);
            ViewBag.Message = "All movies.";
            return View("AllMovies", movies);
        }

        //Method to delete movie from Movie page
        public ActionResult Delete(Movie m)
        {
            MovieDAO dAO = new MovieDAO();
            dAO.deleteMovie(m);
            dAO.getAllMovies();
            ViewBag.Message = "Movie Deleted. Return to 'All Movies'";
            return View("Movie", m);
        }

        //Method to delete a movie from the All Movies View/List
        public ActionResult DeleteMovie(Movie m, MoviesList movies)
        {
            MovieDAO dAO = new MovieDAO();
            dAO.deleteMovie(m);
            movies = dAO.getAllMovies();
            ViewBag.Message = "Movie deleted from All Movies List";
            return View("AllMovies", movies);
        }
    }
}