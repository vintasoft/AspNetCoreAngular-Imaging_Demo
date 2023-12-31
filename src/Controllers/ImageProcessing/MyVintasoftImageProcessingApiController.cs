﻿using Microsoft.AspNetCore.Hosting;

using Vintasoft.Imaging.ImageProcessing.AspNetCore.ApiControllers;

namespace AspNetCoreAngularImagingDemo.Controllers
{
    /// <summary>
    /// A Web API controller for processing web image.
    /// </summary>
    public class MyVintasoftImageProcessingApiController : VintasoftImageProcessingApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageProcessingApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftImageProcessingApiController(IWebHostEnvironment hostingEnvironment)
                : base(hostingEnvironment)
        {
        }
    }
}