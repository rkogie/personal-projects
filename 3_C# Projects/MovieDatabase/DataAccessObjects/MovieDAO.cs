using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Comp235MVCDemo.Models;
using System.Data.SqlClient;

namespace Comp235MVCDemo.DataAccessObjects
{
    public class MovieDAO
    {
		string conString =
	"Data Source=localhost;Initial Catalog=Movies;Integrated Security=True";

		//Below is CRUD functionality Create, Read, Update, Delete for the COMP 235 final
		//Create function
		public void insertMovie(Movie m)
		{
			SqlConnection con = new SqlConnection(conString);
			SqlCommand cmd = new SqlCommand();
			cmd.Connection = con;
			cmd.CommandText = "INSERT INTO Movies(Title, Director, Description) VALUES(@Title, @Director, @Description)";
			cmd.Parameters.AddWithValue("@Title", m.Title);
			cmd.Parameters.AddWithValue("@Director", m.Director);
			cmd.Parameters.AddWithValue("@Description", m.Description);

			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
		}

		//Read function
		public Movie getMovieById(int id) //modified to included description return values
		{
			SqlConnection con = new SqlConnection(conString);
			SqlCommand cmd = new SqlCommand();
			cmd.Connection = con;
			cmd.CommandText =
	"SELECT Id,Title,Director,Description FROM Movies WHERE Id=@Id ORDER BY Id ASC";
			cmd.Parameters.AddWithValue("Id", id);

			//List<Movie> movies = new List<Movie>(); --redundant code (may need use later)
			con.Open();
			SqlDataReader reader = cmd.ExecuteReader();
			reader.Read();
			Movie m = new Movie(
						Convert.ToInt32(reader["Id"]),
						reader["Title"].ToString(),
						reader["Director"].ToString(),
						reader["Description"].ToString()
					);
			return m;
		}

		//Read function (for Collection)
		public MoviesList getAllMovies() //returns the object of MoviesList, not a list of individual Movie objects
        {

			SqlConnection con = new SqlConnection(conString);
			SqlCommand cmd = new SqlCommand();
			cmd.Connection = con;
			cmd.CommandText = "SELECT Id,Title,Director FROM Movies";
			List<Movie> ms = new List<Movie>(); //create an inner collection of individual movies to get the movie data from the datasource


			con.Open();
			SqlDataReader reader = cmd.ExecuteReader();
			while (reader.Read())
			{
				Movie m = new Movie(
					Convert.ToInt32(reader["Id"]),
					reader["Title"].ToString(),
					reader["Director"].ToString()
				);
				ms.Add(m); //pass the individual movie and add to the List<Movie> object
			}

			MoviesList allMovies = new MoviesList(); // create an instance of the MovieList class, assign the collection ms from earlier and return it to the Controller
			allMovies.Items = ms;

			return allMovies;
		}


		//trigger function to accept edits
		public int setMovieToEditMode(List<Movie> movies, int id)
		{
			int editIndex = 0;
			foreach (Movie m in movies)
			{
				if (m.Id == id)
				{
					m.IsEditable = true;
					return editIndex;
				}
				editIndex++;
			}
			return -1;
		}

		/*public Boolean setEditMode(Movie m, int id)
        {
			if (m.Id == id)
			{
				m.IsEditable = true;
			}
			return m.IsEditable;
		}*/

		//Update Function
		public void updateMovie(Movie movie)
		{
			//This method accepts updates with, or without, a description
			SqlConnection con = new SqlConnection(conString);
			SqlCommand cmd = new SqlCommand();
			cmd.Connection = con;
			if (movie.Description != null)
			{
				cmd.CommandText = "UPDATE Movies SET Title=@Title,Director=@Director,Description=@Description WHERE Id=@Id";
				cmd.Parameters.AddWithValue("@Description", movie.Description);
			}
			else
			{
				cmd.CommandText = "UPDATE Movies SET Title=@Title,Director=@Director WHERE Id=@Id";
			}
			cmd.Parameters.AddWithValue("@Title", movie.Title);
			cmd.Parameters.AddWithValue("@Director", movie.Director);
			cmd.Parameters.AddWithValue("@Id", movie.Id);
			con.Open();
			cmd.ExecuteNonQuery();
		}


		//Delete Function
		public void deleteMovie(Movie movie)
        {
			SqlConnection con = new SqlConnection(conString);
			SqlCommand cmd = new SqlCommand();
			cmd.Connection = con;
			cmd.CommandText = "DELETE FROM Movies WHERE Id=@Id"; //SQL query
			cmd.Parameters.AddWithValue("@Id", movie.Id);

			con.Open();
			cmd.ExecuteNonQuery();
			con.Close();
		}
	}
}