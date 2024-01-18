// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.ImageProcessing.DocCleanup {

  // ===== ENUMS =====

  /**
   * Specifies possible location of hole punch on the image.
   */
  class WebHolePunchLocationEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of line ends.
   */
  class WebLineEndsTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of lines.
   */
  class WebLinesTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available orthogonal orientations of image.
   */
  class WebImageOrthogonalOrientationEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available document image types.
   */
  class WebDocumentImageTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Provides the base class for document image processing commands, which can change image source.
   */
  class WebDocumentImageProcessingCommandWithSourceChangeJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentImageProcessingCommandWithSourceChangeJS"] class.
     */
    constructor();

  }

  /**
   * Provides the base class for document image processing commands, which can with image region and change image source.
   */
  class WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS"] class.
     */
    constructor();

  }

  /**
   * Provides the base class for document image processing commands, which can be applied to a web image.
   */
  class WebDocumentImageProcessingCommandBaseJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentImageProcessingCommandBaseJS"] class.
     */
    constructor();

  }

  /**
   * Provides the base class for document image processing commands, which can work with image region.
   */
  class WebDocumentImageProcessingCommandWithRegionJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentImageProcessingCommandWithRegionJS"] class.
     */
    constructor();

  }

  /**
   * Automatically inverts an image of document.
   */
  class WebAutoInvertCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoInvertCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Clears noise on the border of an image.
   */
  class WebBorderClearCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBorderClearCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Detects halftone regions and removes halftone on an image.
   */
  class WebHalftoneRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHalftoneRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether the black and white pixels removal thresholds are calculated automatically.
     */
    get_AutoThreshold(): boolean;

    /**
     * Sets a value indicating whether the black and white pixels removal thresholds are calculated automatically.
     * @param value True - black and white pixels removal thresholds are calculated automatically; otherwise, False. Default value is True.
     */
    set_AutoThreshold(value: boolean): void;

    /**
     * Gets the threshold, in percents, for black pixels removal.
     */
    get_BlackPixelRemovalThreshold(): number;

    /**
     * Sets the threshold, in percents, for black pixels removal.
     * @param value Threshold, in percents, for black pixels removal. Valid values are from 0 to 100. Default value is 33.
     */
    set_BlackPixelRemovalThreshold(value: number): void;

    /**
     * Gets the threshold, in percents, for white pixels removal.
     */
    get_WhitePixelRemovalThreshold(): number;

    /**
     * Sets the threshold, in percents, for white pixels removal.
     * @param value Threshold, in percents, for white pixels removal. Valid values are from 0 to 100. Default value is 33.
     */
    set_WhitePixelRemovalThreshold(value: number): void;

    /**
     * Gets the size, in pixels, of cells the image is divided into.
     */
    get_CellSize(): number;

    /**
     * Sets the size, in pixels, of cells the image is divided into.
     * @param value Size, in pixels, of cells the image is divided into. Valid values are from 10 to 500. Default value is 20.
     */
    set_CellSize(value: number): void;

    /**
     * Gets the maximum length, in pixels, of a halftone segment.
     */
    get_MaxSegmentSize(): number;

    /**
     * Sets the maximum length, in pixels, of a halftone segment.
     * @param value Maximum length, in pixels, of a halftone segment. Valid values are from 2 to 50. Default value is 10.
     */
    set_MaxSegmentSize(value: number): void;

    /**
     * Gets the minimum height, in pixels, of a halftone region.
     */
    get_MinHalftoneHeight(): number;

    /**
     * Sets the minimum height, in pixels, of a halftone region.
     * @param value Minimum height, in pixels, of a halftone region. Minimum value is 10. Default value is 25.
     */
    set_MinHalftoneHeight(value: number): void;

    /**
     * Gets the minimum width, in pixels, of a halftone region.
     */
    get_MinHalftoneWidth(): number;

    /**
     * Sets the minimum width, in pixels, of a halftone region.
     * @param value Minimum width, in pixels, of a halftone region. Minimum value is 10. Default value is 25.
     */
    set_MinHalftoneWidth(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Removes (fills) shapes on document image.
   */
  class WebShapeRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebShapeRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the minimum width, in pixels, of the shape.
     */
    get_ShapeMinWidth(): number;

    /**
     * Sets the minimum width, in pixels, of the shape.
     * @param value The minimum width, in pixels, of the shape. Default value is 1.
     */
    set_ShapeMinWidth(value: number): void;

    /**
     * Gets the minimum height, in pixels, of the shape.
     */
    get_ShapeMinHeight(): number;

    /**
     * Sets the minimum height, in pixels, of the shape.
     * @param value The minimum height, in pixels, of the shape. Default value is 1.
     */
    set_ShapeMinHeight(value: number): void;

    /**
     * Gets the maximum width, in pixels, of the shape.
     */
    get_ShapeMaxWidth(): number;

    /**
     * Sets the maximum width, in pixels, of the shape.
     * @param value The maximum width, in pixels, of the shape. Default value is 1.
     */
    set_ShapeMaxWidth(value: number): void;

    /**
     * Gets the maximum height, in pixels, of the shape.
     */
    get_ShapeMaxHeight(): number;

    /**
     * Sets the maximum height, in pixels, of the shape.
     * @param value The maximum height, in pixels, of the shape. Default value is 1.
     */
    set_ShapeMaxHeight(value: number): void;

    /**
     * Gets the maximum distance, in pixels, between separated parts of one shape.
     */
    get_MaxDistanceBetweenParts(): number;

    /**
     * Sets the maximum distance, in pixels, between separated parts of one shape.
     * @param value The maximum distance, in pixels, between separated parts of one shape. Default value is 1.
     */
    set_MaxDistanceBetweenParts(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Clears halftone and improves text quality of a black-white image.
   */
  class WebRestoreTextFromHalftoneCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRestoreTextFromHalftoneCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether the black and white pixels removal thresholds are calculated automatically.
     */
    get_AutoThreshold(): boolean;

    /**
     * Sets a value indicating whether the black and white pixels removal thresholds are calculated automatically.
     * @param value True - the black and white pixels removal thresholds are calculated automatically; otherwise, False. Default value is True.
     */
    set_AutoThreshold(value: boolean): void;

    /**
     * Gets the threshold, in percents, for black pixels removal.
     */
    get_BlackPixelRemovalThreshold(): number;

    /**
     * Sets the threshold, in percents, for black pixels removal.
     * @param value Threshold, in percents, for black pixels removal. Valid values are from 0 to 100. Default value is 33.
     */
    set_BlackPixelRemovalThreshold(value: number): void;

    /**
     * Gets the threshold, in percents, for white pixels removal.
     */
    get_WhitePixelRemovalThreshold(): number;

    /**
     * Sets the threshold, in percents, for white pixels removal.
     * @param value Threshold, in percents, for white pixels removal. Valid values are from 0 to 100. Default value is 33.
     */
    set_WhitePixelRemovalThreshold(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Deskews an image, i.e. detects a correct position of a textual image.
   */
  class WebDeskewCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDeskewCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color for filling the image border when BorderColorType is set to BorderColorType.Custom.
     */
    get_BorderColor(): string;

    /**
     * Sets the color for filling the image border when BorderColorType is set to BorderColorType.Custom.
     * @param value Color. Default value is "rgba(0,0,0,1)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets the type of the border color. Free space around rotated image will be filled with this color.
     */
    get_BorderColorType(): Vintasoft.Imaging.WebBorderColorTypeEnumJS;

    /**
     * Sets the type of the border color. Free space around rotated image will be filled with this color.
     * @param value An instance of [see="WebBorderColorTypeEnumJS"] class. Default value is "AutoDetect".
     */
    set_BorderColorType(value: Vintasoft.Imaging.WebBorderColorTypeEnumJS): void;

    /**
     * Gets scan interval on X axis.
     */
    get_ScanIntervalX(): number;

    /**
     * Sets scan interval on X axis.
     * @param value Scan interval. Valid value is any positive value. Recommended values are from 1 to 10. Default value is 1.
     */
    set_ScanIntervalX(value: number): void;

    /**
     * Gets scan interval on Y axis.
     */
    get_ScanIntervalY(): number;

    /**
     * Sets scan interval on Y axis.
     * @param value Scan interval. Valid value is any positive value. Recommended values are from 1 to 10. Default value is 1.
     */
    set_ScanIntervalY(value: number): void;

    /**
     * Gets the maximum possible angle (clockwise and counterclockwise) detected by command.
     */
    get_MaxAngle(): number;

    /**
     * Sets the maximum possible angle (clockwise and counterclockwise) detected by command.
     * @param value Maximum possible angle. Valid values are from 0 to 90. Default value is 0.
     */
    set_MaxAngle(value: number): void;

    /**
     * Gets the minimum confidence, in percents, for determined rotation angle.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence, in percents, for determined rotation angle.
     * @param value Minimum confidence, in percents, for determined rotation angle. Valid values are from 0.0 to 1.0. Default value is 0.4.
     */
    set_MinConfidence(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Applies a smoothing effect to a 1 bit-per-pixel image.
   */
  class WebSmoothingCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSmoothingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum size, in pixels, of the bumps to be removed.
     */
    get_BumpSize(): number;

    /**
     * Sets the maximum size, in pixels, of the bumps to be removed.
     * @param value Maximum size, in pixels, of the bumps to be removed. Valid values are from 1 to 512. Default value is 1.
     */
    set_BumpSize(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Fills not filled hole punches (fills white circle inside hole punch by black color) on image automatically.
   */
  class WebHolePunchFillingCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHolePunchFillingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether color for filling of hole punches is detected automatically.
     */
    get_FillColorAutoDetection(): boolean;

    /**
     * Sets a value indicating whether color for filling of hole punches is detected automatically.
     * @param value True - color for filing of hole punches is detected automatically; otherwise, False. Default value is True.
     */
    set_FillColorAutoDetection(value: boolean): void;

    /**
     * Gets the maximum size, in pixels, of the holes to be removed.
     */
    get_MaxHoleSize(): number;

    /**
     * Sets the maximum size, in pixels, of the holes to be removed.
     * @param value Maximum size, in pixels, of the holes to be removed. Valid values are from 6 to 600. Default value is 100.
     */
    set_MaxHoleSize(value: number): void;

    /**
     * Gets the minimum size, in pixels, of the holes to be removed.
     */
    get_MinHoleSize(): number;

    /**
     * Sets the minimum size, in pixels, of the holes to be removed.
     * @param value Minimum size, in pixels, of the holes to be removed. Valid values are from 6 to 400. Default value is 20.
     */
    set_MinHoleSize(value: number): void;

    /**
     * Gets the location of the hole punches to remove.
     */
    get_HolePunchLocation(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchLocationEnumJS;

    /**
     * Sets the location of the hole punches to remove.
     * @param value An instance of [see="WebHolePunchLocationEnumJS"] class. Default value is "Left".
     */
    set_HolePunchLocation(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchLocationEnumJS): void;

    /**
     * Gets a color for filling of hole punches.
     */
    get_FillColor(): string;

    /**
     * Sets a color for filling of hole punches.
     * @param value Color for filing of hole punches. Default value is "rgba(0,0,0,0)".
     */
    set_FillColor(value: string): void;

    /**
     * Gets the size, in pixels, of border around hole punch, which should be filled.
     */
    get_FillBorderSize(): number;

    /**
     * Sets the size, in pixels, of border around hole punch, which should be filled.
     * @param value 0 - command will fill hole punch only (use this value for "ideal" hole punches); N - command will file hole punch and border around hole punch (use border around hole punch for "not ideal" hole punches). Default value is 0.
     */
    set_FillBorderSize(value: number): void;

    /**
     * Gets a binarization command that must be applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode that must be applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Removes black hole punches (fills black hole punches by white color) on image automatically.
   */
  class WebHolePunchRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHolePunchRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether color for filling of hole punches is detected automatically.
     */
    get_FillColorAutoDetection(): boolean;

    /**
     * Sets a value indicating whether color for filling of hole punches is detected automatically.
     * @param value True - color for filing of hole punches is detected automatically; otherwise, False. Default value is True.
     */
    set_FillColorAutoDetection(value: boolean): void;

    /**
     * Gets the maximum size, in pixels, of the holes to be removed.
     */
    get_MaxHoleSize(): number;

    /**
     * Sets the maximum size, in pixels, of the holes to be removed.
     * @param value Maximum size, in pixels, of the holes to be removed. Valid values are from 6 to 600. Default value is 100.
     */
    set_MaxHoleSize(value: number): void;

    /**
     * Gets the minimum size, in pixels, of the holes to be removed.
     */
    get_MinHoleSize(): number;

    /**
     * Sets the minimum size, in pixels, of the holes to be removed.
     * @param value Minimum size, in pixels, of the holes to be removed. Valid values are from 6 to 400. Default value is 20.
     */
    set_MinHoleSize(value: number): void;

    /**
     * Gets the location of the hole punches to remove.
     */
    get_HolePunchLocation(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchLocationEnumJS;

    /**
     * Sets the location of the hole punches to remove.
     * @param value An instance of [see="WebHolePunchLocationEnumJS"] class. Default value is "Left".
     */
    set_HolePunchLocation(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchLocationEnumJS): void;

    /**
     * Gets a color for filling of hole punches.
     */
    get_FillColor(): string;

    /**
     * Sets a color for filling of hole punches.
     * @param value Color for filing of hole punches. Default value is "rgba(0,0,0,0)".
     */
    set_FillColor(value: string): void;

    /**
     * Gets the size, in pixels, of border around hole punch, which should be filled.
     */
    get_FillBorderSize(): number;

    /**
     * Sets the size, in pixels, of border around hole punch, which should be filled.
     * @param value 0 - command will fill hole punch only (use this value for "ideal" hole punches); N - command will file hole punch and border around hole punch (use border around hole punch for "not ideal" hole punches). Default value is 0.
     */
    set_FillBorderSize(value: number): void;

    /**
     * Gets a binarization command that must be applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode that must be applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Detects and removes borders around an image.
   */
  class WebLineRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLineRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a binarization command applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class. By default the Global binarization is used.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    /**
     * Gets the direction of lines.
     */
    get_Direction(): Vintasoft.Imaging.WebImageProcessingDirectionEnumJS;

    /**
     * Sets the direction of lines.
     * @param value An instance of [see="WebImageProcessingDirectionEnumJS"] class. Default value is "Horizontal" and "Vertical".
     */
    set_Direction(value: Vintasoft.Imaging.WebImageProcessingDirectionEnumJS): void;

    /**
     * Gets a value indicating whether color for filling of lines is detected automatically.
     */
    get_FillColorAutoDetection(): boolean;

    /**
     * Sets a value indicating whether color for filling of lines is detected automatically.
     * @param value True - color for filling of lines is detected automatically; otherwise, False. Default value is True.
     */
    set_FillColorAutoDetection(value: boolean): void;

    /**
     * Gets a color for filling of lines.
     */
    get_FillColor(): string;

    /**
     * Sets a color for filling of lines.
     * @param value Color for filling of lines. Default value is "rgba(0,0,0,0)".
     */
    set_FillColor(value: string): void;

    /**
     * Gets the type of lines ends.
     */
    get_LineEndsType(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebLineEndsTypeEnumJS;

    /**
     * Sets the type of lines ends.
     * @param value An instance of [see="WebLineEndsTypeEnumJS"] class. Default value is "Any".
     */
    set_LineEndsType(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebLineEndsTypeEnumJS): void;

    /**
     * Gets the type of lines to remove.
     */
    get_LinesType(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebLinesTypeEnumJS;

    /**
     * Sets the type of lines to remove.
     * @param value An instance of [see="WebLinesTypeEnumJS"] class. Default value is "Custom".
     */
    set_LinesType(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebLinesTypeEnumJS): void;

    /**
     * Gets the maximum length of line gap.
     */
    get_MaxGapLength(): number;

    /**
     * Sets the maximum length of line gap.
     * @param value The maximum length of line gap. Valid value is 0 and any positive value. Default value is 0.
     */
    set_MaxGapLength(value: number): void;

    /**
     * Gets the maximum curvature of line.
     */
    get_MaxCurvature(): number;

    /**
     * Sets the maximum curvature of line.
     * @param value Maximun curvature of line. Valid values are from 0.0 to 1.0. Default value is 0.1.
     */
    set_MaxCurvature(value: number): void;

    /**
     * Gets the maximum angle, in degrees, of line deviation from the direction.
     */
    get_MaxDeviationAngle(): number;

    /**
     * Sets the maximum angle, in degrees, of line deviation from the direction.
     * @param value Maximum angle, in degrees, of line deviation from the direction. Valid values are from 0 to 45. Default value is 5.
     */
    set_MaxDeviationAngle(value: number): void;

    /**
     * Gets the minimum length of line.
     */
    get_MinLength(): number;

    /**
     * Sets the minimum length of line.
     * @param value Minimum length of line. 0 - minimum length of line is calculated automatically; 10 and more - minimum length of line. Default value is 100.
     */
    set_MinLength(value: number): void;

    /**
     * Gets the maximum length of line.
     */
    get_MaxLength(): number;

    /**
     * Sets the maximum length of line.
     * @param value Maximum length of line. 0 - maximum length of line is calculated automatically; 10 and more - maximum length of line. Default value is 3000.
     */
    set_MaxLength(value: number): void;

    /**
     * Gets the minimum width of line.
     */
    get_MinWidth(): number;

    /**
     * Sets the minimum width of line.
     * @param value Minimum width of line. 0 - minimum width of line is calculated automatically; 1 and more - minimum width of line. Default value is 1.
     */
    set_MinWidth(value: number): void;

    /**
     * Gets the maximum width of line.
     */
    get_MaxWidth(): number;

    /**
     * Sets the maximum width of line.
     * @param value Maximum width of line. 0 - maximum width of line is calculated automatically; 1 and more - maximum width of line. Default value is 15.
     */
    set_MaxWidth(value: number): void;

    /**
     * Gets the minimum confidence of line.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence of line.
     * @param value Minimum confidence of line. Valid values are from 0.0 to 1.0. Default value is 0.75.
     */
    set_MinConfidence(value: number): void;

    /**
     * Gets the minimum length-to-width ratio of line.
     */
    get_MinSizeRatio(): number;

    /**
     * Sets the minimum length-to-width ratio of line.
     * @param value Minimum length-to-width ratio of line. Valid values are 1.0 and more. Default value is 1.
     */
    set_MinSizeRatio(value: number): void;

    /**
     * Gets the value indicating whether the line removal process reconnects objects that are broken after removing of the intersecting lines.
     */
    get_ReconnectBrokenObjects(): boolean;

    /**
     * Sets the value indicating whether the line removal process reconnects objects that are broken after removing of the intersecting lines.
     * @param value True - removal process reconnects objects, otherwise, False. Default value is True.
     */
    set_ReconnectBrokenObjects(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Automatically inverts inverted text regions on an image.
   */
  class WebAutoTextInvertCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoTextInvertCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a binarization command applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class. By default the Global binarization is used.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    /**
     * Gets a color for filling of inverted text block background.
     */
    get_BackgroundColor(): string;

    /**
     * Sets a color for filling of inverted text block background.
     * @param value Color for filling of inverted text block background. Default value is "rgba(255,255,255,1)".
     */
    set_BackgroundColor(value: string): void;

    /**
     * Gets a color for filling of inverted text.
     */
    get_TextColor(): string;

    /**
     * Sets a color for filling of inverted text.
     * @param value Color for filling of inverted text. Default value is "rgba(0,0,0,1)".
     */
    set_TextColor(value: string): void;

    /**
     * Gets the minimum height, in pixels, of inverted text block.
     */
    get_MinHeight(): number;

    /**
     * Sets the minimum height, in pixels, of inverted text block.
     * @param value Minimum height, in pixels, of inverted text block. Valid values are from 10 to 16384. Default value is 20.
     */
    set_MinHeight(value: number): void;

    /**
     * Gets the minimum width, in pixels, of inverted text block.
     */
    get_MinWidth(): number;

    /**
     * Sets the minimum width, in pixels, of inverted text block.
     * @param value Minimum width, in pixels, of inverted text block. Valid values are from 10 to 16384. Default value is 50.
     */
    set_MinWidth(value: number): void;

    /**
     * Gets the maximum height, in pixels, of inverted text block.
     */
    get_MaxHeight(): number;

    /**
     * Sets the maximum height, in pixels, of inverted text block.
     * @param value Maximum height, in pixels, of inverted text block. Valid values are from 10 to 16384. Default value is 200.
     */
    set_MaxHeight(value: number): void;

    /**
     * Gets the maximum width, in pixels, of inverted text block.
     */
    get_MaxWidth(): number;

    /**
     * Sets the maximum width, in pixels, of inverted text block.
     * @param value Maximum width, in pixels, of inverted text block. Valid values are from 10 to 16384. Default value is 1500.
     */
    set_MaxWidth(value: number): void;

    /**
     * Gets the minimum percentage of white pixels in inverted text block.
     */
    get_MinWhitePercentage(): number;

    /**
     * Sets the minimum percentage of white pixels in inverted text block.
     * @param value Minimum percentage of white pixels in inverted text block. Valid values are from 0.0 to 49.0. Default value is 1.0.
     */
    set_MinWhitePercentage(value: number): void;

    /**
     * Gets the maximum percentage of white pixels in inverted text block.
     */
    get_MaxWhitePercentage(): number;

    /**
     * Sets the maximum percentage of white pixels in inverted text block.
     * @param value Maximum percentage of white pixels in inverted text block. Valid values are from 0.0 to 49.0. Default value is 40.0.
     */
    set_MaxWhitePercentage(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Removes noise from an image.
   */
  class WebDespeckleCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDespeckleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum pixel amount in a "small" noise object.
     */
    get_Level1(): number;

    /**
     * Sets the maximum pixel amount in a "small" noise object.
     * @param value Maximum pixel amount. Valid values are from 0 to 100. Default value is 8.
     */
    set_Level1(value: number): void;

    /**
     * Gets the maximum pixel amount in a "medium" noise object.
     */
    get_Level2(): number;

    /**
     * Sets the maximum pixel amount in a "medium" noise object.
     * @param value Maximum pixel amount. Valid values are from 0 to 100. Default value is 25.
     */
    set_Level2(value: number): void;

    /**
     * Gets the radius around a "medium" noise object which does not contain "not-noise" objects.
     */
    get_Radius(): number;

    /**
     * Sets the radius around a "medium" noise object which does not contain "not-noise" objects.
     * @param value Radius. Valid values are from 0 to 100. Default value is 30.
     */
    set_Radius(value: number): void;

    /**
     * Gets a value indicating whether automatic configuration of levels and radius should be used.
     */
    get_AutoConfigureLevels(): boolean;

    /**
     * Sets a value indicating whether automatic configuration of levels and radius should be used.
     * @param value True - if automatic configuration of levels and radius is enabled; otherwise, false. Default value is True.
     */
    set_AutoConfigureLevels(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Detects and removes borders around an image.
   */
  class WebBorderRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBorderRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the type of the removing border color. Only borders with specified color type will be removed.
     */
    get_BorderRemovalColorType(): Vintasoft.Imaging.WebBorderRemovalColorTypeEnumJS;

    /**
     * Sets the type of the removing border color. Only borders with specified color type will be removed.
     * @param value An instance of [see="WebBorderRemovalColorTypeEnumJS"] class. Default value is "Auto".
     */
    set_BorderRemovalColorType(value: Vintasoft.Imaging.WebBorderRemovalColorTypeEnumJS): void;

    /**
     * Gets permitted noise level, in percents, on the border of an image.
     */
    get_MaxBorderNoise(): number;

    /**
     * Sets permitted noise level, in percents, on the border of an image.
     * @param value Permitted noise level, in percents. Valid values are from 0 to 100. Default value is 0.
     */
    set_MaxBorderNoise(value: number): void;

    /**
     * Gets image sides where border will be searched.
     */
    get_Side(): Vintasoft.Imaging.WebImageSideEnumJS;

    /**
     * Sets image sides where border will be searched.
     * @param value An instance of [see="WebImageSideEnumJS"] class. Default value is "All".
     */
    set_Side(value: Vintasoft.Imaging.WebImageSideEnumJS): void;

    /**
     * Gets a binarization command, which must be applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command, which must be applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    // METHODS

    /**
     * Gets the border indent size, in pixels.
     */
    get_BorderSize(): number;

    /**
     * Sets the border indent size, in pixels.
     * @param value Border indent size. Valid values are from 0 to 1000. Default value is 5.
     */
    set_BorderSize(value: number): void;

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Automatically detects text orientation in a document image and rotates the image if necessary.
   */
  class WebAutoTextOrientationCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoTextOrientationCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a binarization command applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    /**
     * Gets the minimum confidence for determined orientation.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence for determined orientation.
     * @param value Minimum confidence for determined orientation. Valid values are from 0.0 to 1.0.
     */
    set_MinConfidence(value: number): void;

    /**
     * Gets the width of strips, in pixels, for image scanning.
     */
    get_StripWidth(): number;

    /**
     * Sets the width of strips, in pixels, for image scanning.
     * @param value Width of strips, in pixels, for image scanning. 0 - width of strips is calculated automatically for each image depending on its resolution; 20 and more - strip with in pixels. Default value is 0.
     */
    set_StripWidth(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Replaces color(s), defined as color sphere(s), in an image.
   */
  class WebAdvancedReplaceColorCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAdvancedReplaceColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the black-white image mask.
     */
    get_MaskImage(): string;

    /**
     * Sets the black-white image mask.
     * @param value Url or base64 statement of image. Default value is empty string.
     */
    set_MaskImage(value: string): void;

    /**
     * Gets color spheres which defines colors which should be replaced.
     */
    get_ColorReplaceSpheres(): Vintasoft.Imaging.ImageProcessing.WebColorReplaceSphereJS;

    /**
     * Sets color spheres which defines colors which should be replaced.
     * @param value Array of [see="WebColorReplaceSphereJS"] objects.
     */
    set_ColorReplaceSpheres(value: Vintasoft.Imaging.ImageProcessing.WebColorReplaceSphereJS): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Clears color noise on an image.
   */
  class WebColorNoiseClearCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorNoiseClearCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the black-white image mask.
     */
    get_MaskImage(): string;

    /**
     * Sets the black-white image mask.
     * @param value Url or base64 statement of image. Default value is empty string.
     */
    set_MaskImage(value: string): void;

    /**
     * Gets a radius, in range from 0 to 1, which specifies when interpolation should be used for color replacement.
     */
    get_InterpolationRadius(): number;

    /**
     * Sets a radius, in range from 0 to 1, which specifies when interpolation should be used for color replacement.
     * @param value Interpolation radius. Valid values are from 0.0 to 1.0. Default value is 0.5.
     */
    set_InterpolationRadius(value: number): void;

    /**
     * Gets an array of colors, presented as color spheres, which should be replaced.
     */
    get_ColorSpheres(): Vintasoft.Imaging.ImageProcessing.WebColorSphereJS[];

    /**
     * Sets an array of colors, presented as color spheres, which should be replaced.
     * @param value Array of [see="WebColorSphereJS"] objects.
     */
    set_ColorSpheres(value: Vintasoft.Imaging.ImageProcessing.WebColorSphereJS[]): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Detects rotation angle of a document image and rotates document image using the detected angle.
   */
  class WebDeskewDocumentImageCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDeskewDocumentImageCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the value indicating whether the command should clear border in image.
     */
    get_ClearBorder(): boolean;

    /**
     * Sets the value indicating whether the command should clear border in image.
     * @param value true - command clears the border on deskewed image; false - command returns deskewed image without changes. Default value is True.
     */
    set_ClearBorder(value: boolean): void;

    /**
     * Gets the value indicating whether the command should remove lines before the orientation detection.
     */
    get_RemoveLinesBeforeOrientationDetection(): boolean;

    /**
     * Sets the value indicating whether the command should remove lines before the orientation detection.
     * @param value true - command removes lines before orientation detection; false - command detects orientation on initial image. Default value is False.
     */
    set_RemoveLinesBeforeOrientationDetection(value: boolean): void;

    /**
     * Gets the minimum confidence, in percents, for determined rotation angle.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence, in percents, for determined rotation angle.
     * @param value Minimum confidence, in percents, for determined rotation angle. Valid values are from 0.0 to 1.0. Default value is 0.3.
     */
    set_MinConfidence(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Checks whether a document image is inverted.
   */
  class WebIsDocumentImageCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIsDocumentImageCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the type of the analyzing document image.
     */
    get_DocumentImageType(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageTypeEnumJS;

    /**
     * Sets the type of the analyzing document image.
     * @param value An instance of [see="WebDocumentImageTypeEnumJS"] class. Default value is "ScannedDocument".
     */
    set_DocumentImageType(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageTypeEnumJS): void;

    // METHODS

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

  }

  /**
   * Detects rotation angle of an textual image.
   */
  class WebGetRotationAngleCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetRotationAngleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum possible angle (clockwise and counterclockwise) detected by command.
     */
    get_MaxAngle(): number;

    /**
     * Sets the maximum possible angle (clockwise and counterclockwise) detected by command.
     * @param value Maximum possible angle. Valid values are from 0 to 90. Default value is 0.
     */
    set_MaxAngle(value: number): void;

    /**
     * Gets scan interval on X axis.
     */
    get_ScanIntervalX(): number;

    /**
     * Sets scan interval on X axis.
     * @param value Scan interval on X axis. Valid value is any positive value. Recommended values are from 1 to 10. Default value is 1.
     */
    set_ScanIntervalX(value: number): void;

    /**
     * Gets scan interval on Y axis.
     */
    get_ScanIntervalY(): number;

    /**
     * Sets scan interval on Y axis.
     * @param value Scan interval on Y axis. Valid value is any positive value. Recommended values are from 1 to 10. Default value is 1.
     */
    set_ScanIntervalY(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects regions of halftone of a black-white image.
   */
  class WebHalftoneRecognitionCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHalftoneRecognitionCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the size, in pixels, of cells the image is divided into.
     */
    get_CellSize(): number;

    /**
     * Sets the size, in pixels, of cells the image is divided into.
     * @param value Size, in pixels, of cells the image is divided into. Valid values are from 10 to 500. Default value is 20.
     */
    set_CellSize(value: number): void;

    /**
     * Gets the maximum length, in pixels, of a halftone segment.
     */
    get_MaxSegmentSize(): number;

    /**
     * Sets the maximum length, in pixels, of a halftone segment.
     * @param value Maximum length, in pixels, of a halftone segment. Valid values are from 2 to 50. Default value is 10.
     */
    set_MaxSegmentSize(value: number): void;

    /**
     * Gets the minimum height, in pixels, of a halftone region.
     */
    get_MinHalftoneHeight(): number;

    /**
     * Sets the minimum height, in pixels, of a halftone region.
     * @param value Minimum height, in pixels, of a halftone region. Minimum value is 10. Default value is 25.
     */
    set_MinHalftoneHeight(value: number): void;

    /**
     * Gets the minimum width, in pixels, of a halftone region.
     */
    get_MinHalftoneWidth(): number;

    /**
     * Sets the minimum width, in pixels, of a halftone region.
     * @param value Minimum width, in pixels, of a halftone region. Minimum value is 10. Default value is 25.
     */
    set_MinHalftoneWidth(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects regions of various types of a document image.
   */
  class WebDocumentSegmentationCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentSegmentationCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the border size of each image region.
     */
    get_BorderSize(): number;

    /**
     * Sets the border size of each image region.
     * @param value Border size of each image region. Valid value is 0 and any positive value. Default value is 1.
     */
    set_BorderSize(value: number): void;

    /**
     * Gets the minimum height, in pixels, of text line.
     */
    get_MinTextLineHeight(): number;

    /**
     * Sets the minimum height, in pixels, of text line.
     * @param value Minimum height, in pixels, of text line. Minimum value is 1. Default value is 6.
     */
    set_MinTextLineHeight(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects image regions on a color document image.
   */
  class WebImageSegmentationCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSegmentationCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum allowable difference between colors for image region in the source document image.
     */
    get_ColorHighThreshold(): number;

    /**
     * Sets the maximum allowable difference between colors for image region in the source document image.
     * @param value Maximum allowable difference between colors for image region. Valid values are from 0 to 255. Default value is 120.
     */
    set_ColorHighThreshold(value: number): void;

    /**
     * Gets the minimum allowable difference between colors for image region in the source document image.
     */
    get_ColorLowThreshold(): number;

    /**
     * Sets the minimum allowable difference between colors for image region in the source document image.
     * @param value Minimum allowable difference between colors for image region. Valid values are from 0 to 255. Default value is 3.
     */
    set_ColorLowThreshold(value: number): void;

    /**
     * Gets the minimum region area.
     */
    get_MinimumRegionArea(): number;

    /**
     * Sets the minimum region area.
     * @param value Minimum region area. Valid values are 0 and any positive values. Default value is 0.
     */
    set_MinimumRegionArea(value: number): void;

    /**
     * Gets the window size for noise removal algorithm.
     */
    get_NoiseRemovalWindowSize(): number;

    /**
     * Sets the window size for noise removal algorithm.
     * @param value Window size for noise removal algorithm. Valid value is any positive odd value. Default value is 11.
     */
    set_NoiseRemovalWindowSize(value: number): void;

    /**
     * Gets the accuracy of approximating image region using rectangles.
     */
    get_RectangleAccuracy(): number;

    /**
     * Sets the accuracy of approximating image region using rectangles.
     * @param value Accuracy of approximating image region using rectangles. Valid value is any value more than 1. Default value is 5.
     */
    set_RectangleAccuracy(value: number): void;

    /**
     * Gets the sensitivity of the command.
     */
    get_Sensitivity(): number;

    /**
     * Sets the sensitivity of the command.
     * @param value Sensitivity of the command. Valid values are from 0 to 765. Default value is 15.
     */
    set_Sensitivity(value: number): void;

    /**
     * Gets a window size of the command.
     */
    get_WindowSize(): number;

    /**
     * Sets a window size of the command.
     * @param value Window size of the command. Valid value is any value more than 0. Default value is 7.
     */
    set_WindowSize(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects text orientation in a document image.
   */
  class WebGetTextOrientationCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetTextOrientationCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the minimum confidence, in percents, for determined rotation angle.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence, in percents, for determined rotation angle.
     * @param value Minimum confidence, in percents, for determined rotation angle. Valid values are from 0.0 to 1.0. Default value is 0.3.
     */
    set_MinConfidence(value: number): void;

    /**
     * Gets the width of strips, in pixels, for image scanning.
     */
    get_StripWidth(): number;

    /**
     * Sets the width of strips, in pixels, for image scanning.
     * @param value Width of strips, in pixels, for image scanning. 0 - width of strips is calculated automatically for each image depending on its resolution; 20 and more - strip with in pixels. Default value is 0.
     */
    set_StripWidth(value: number): void;

    /**
     * Gets a binarization command applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class. By default the Threshold binarization is used.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects rotation angle of a document image.
   */
  class WebGetDocumentImageRotationAngleCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetDocumentImageRotationAngleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a binarization command applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class. By default the Adaptive binarization is used.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    /**
     * Gets the value indicating whether the command should detect border in image.
     */
    get_DetectBorder(): boolean;

    /**
     * Sets the value indicating whether the command should detect border in image.
     * @param value true - command detects the border and clears it berofe rotation angle determining; false - command determines the rotation angle on initial image. Default value is True.
     */
    set_DetectBorder(value: boolean): void;

    /**
     * Gets the value indicating whether the command should remove lines before the orientation detection.
     */
    get_RemoveLinesBeforeTextOrientationDetection(): boolean;

    /**
     * Sets the value indicating whether the command should remove lines before the orientation detection.
     * @param value true - command removes lines before orientation detection; false - command detects orientation on initial image. Default value is False.
     */
    set_RemoveLinesBeforeTextOrientationDetection(value: boolean): void;

    /**
     * Gets the minimum confidence, in percents, for determined rotation angle.
     */
    get_MinConfidence(): number;

    /**
     * Sets the minimum confidence, in percents, for determined rotation angle.
     * @param value Minimum confidence, in percents, for determined rotation angle. Valid values are from 0.0 to 1.0. Default value is 0.3.
     */
    set_MinConfidence(value: number): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Executes typical sequence of image processing commands necessary to prepare an image for optical character recognition.
   */
  class WebOcrPreprocessingCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOcrPreprocessingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a binarization command, which must be applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command, which must be applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class. By default the Adaptive binarization is used.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    /**
     * Gets an automatic inversion command.
     */
    get_AutomaticalInvert(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebAutoInvertCommandJS;

    /**
     * Sets an automatic inversion command.
     * @param value An instance of [see="WebAutoInvertCommandJS"] class. By default automatic inversion is used.
     */
    set_AutomaticalInvert(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebAutoInvertCommandJS): void;

    /**
     * Gets a command that detects and removes halftones.
     */
    get_HalftoneRemoval(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHalftoneRemovalCommandJS;

    /**
     * Sets a command that detects and removes halftones.
     * @param value An instance of [see="WebHalftoneRemovalCommandJS"] class. By default command is used.
     */
    set_HalftoneRemoval(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHalftoneRemovalCommandJS): void;

    /**
     * Gets a border removal command.
     */
    get_BorderClear(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebBorderClearCommandJS;

    /**
     * Sets a border removal command.
     * @param value An instance of [see="WebBorderClearCommandJS"] class. By default command is used.
     */
    set_BorderClear(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebBorderClearCommandJS): void;

    /**
     * Gets a noise removal command.
     */
    get_Despeckle(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDespeckleCommandJS;

    /**
     * Sets a noise removal command.
     * @param value An instance of [see="WebDespeckleCommandJS"] class. By default command is used.
     */
    set_Despeckle(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDespeckleCommandJS): void;

    /**
     * Gets an automatic rotation command.
     */
    get_Deskew(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDeskewCommandJS;

    /**
     * Sets an automatic rotation command.
     * @param value An instance of [see="WebDeskewCommandJS"] class. By default command is used.
     */
    set_Deskew(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDeskewCommandJS): void;

    /**
     * Gets a command for removing hole punches.
     */
    get_HolePunchRemoval(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchRemovalCommandJS;

    /**
     * Sets a command for removing hole punches.
     * @param value An instance of [see="WebHolePunchRemovalCommandJS"] class. By default command is used.
     */
    set_HolePunchRemoval(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebHolePunchRemovalCommandJS): void;

    /**
     * Gets an automatic orientation command.
     */
    get_AutomaticalOrientation(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebAutoTextOrientationCommandJS;

    /**
     * Sets an automatic orientation command.
     * @param value An instance of [see="WebAutoTextOrientationCommandJS"] class. By default command is used.
     */
    set_AutomaticalOrientation(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebAutoTextOrientationCommandJS): void;

    /**
     * Gets a document segmentation command.
     */
    get_Segmentation(): Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentSegmentationCommandJS;

    /**
     * Sets a document segmentation command.
     * @param value An instance of [see="WebDocumentSegmentationCommandJS"] class. By default command is used.
     */
    set_Segmentation(value: Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentSegmentationCommandJS): void;

    // METHODS

    /**
     * Returns command parameters as object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Checks command parameters before command execution. Throws an exception if parameters are NOT correct.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Corrects perspective distortion of the document image.
   */
  class WebDocumentPerspectiveCorrectionCommandJS extends Vintasoft.Imaging.ImageProcessing.DocCleanup.WebDocumentImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentPerspectiveCorrectionCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

}

