using Microsoft.AspNetCore.Hosting;

using Vintasoft.Imaging.ImageProcessing.DocCleanup.AspNetCore.ApiControllers;

namespace AspNetCoreAngularImagingDemo.Controllers
{
    /// <summary>
    /// A Web API controller for processing web document image.
    /// </summary>
    public class MyVintasoftImageProcessingDocCleanupApiController : VintasoftImageProcessingDocCleanupApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageProcessingDocCleanupApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftImageProcessingDocCleanupApiController(IWebHostEnvironment hostingEnvironment)
                : base(hostingEnvironment)
        {
        }

    }
}
